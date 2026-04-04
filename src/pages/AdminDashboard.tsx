import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { testimonialStore, Testimonial } from "@/lib/testimonials";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  LogOut, Trash2, Eye, EyeOff, Search, MessageSquare, Users, BarChart3,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [search, setSearch] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    setTestimonials(testimonialStore.getAll());
  }, []);

  const refresh = useCallback(() => {
    setTestimonials(testimonialStore.getAll());
  }, []);

  const handleToggle = (id: string) => {
    testimonialStore.toggleVisibility(id);
    refresh();
    toast({ title: "Visibility updated", description: "Testimonial visibility has been toggled." });
  };

  const handleDelete = (id: string) => {
    testimonialStore.remove(id);
    refresh();
    setDeleteConfirm(null);
    toast({ title: "Testimonial deleted", description: "The testimonial has been permanently removed." });
  };

  const handleLogout = () => {
    logout();
    window.location.replace("/admin");
  };

  const filtered = testimonials.filter((t) => {
    const q = search.toLowerCase();
    return (
      t.name.toLowerCase().includes(q) ||
      t.email.toLowerCase().includes(q) ||
      t.phone.includes(q) ||
      t.quote.toLowerCase().includes(q) ||
      t.role.toLowerCase().includes(q)
    );
  });

  const visibleCount = testimonials.filter((t) => t.visible).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-foreground">Testimonial Manager</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Sevasi High School Admin</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="rounded-xl text-base font-medium gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="card-modern p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Total</p>
              <p className="font-heading text-2xl font-bold text-foreground">{testimonials.length}</p>
            </div>
          </div>
          <div className="card-modern p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
              <Eye className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Visible on Site</p>
              <p className="font-heading text-2xl font-bold text-foreground">{visibleCount}</p>
            </div>
          </div>
          <div className="card-modern p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
              <EyeOff className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">Hidden</p>
              <p className="font-heading text-2xl font-bold text-foreground">{testimonials.length - visibleCount}</p>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search testimonials..."
              className="pl-10 h-11 rounded-xl text-base"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BarChart3 className="w-4 h-4" />
            <span>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div className="card-modern p-12 text-center">
            <Users className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <p className="text-lg font-heading font-semibold text-foreground mb-1">No testimonials found</p>
            <p className="text-base text-muted-foreground">
              {search ? "Try adjusting your search query." : "No testimonials have been submitted yet."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((t) => (
              <div
                key={t.id}
                className={`card-modern p-5 sm:p-6 transition-all duration-200 ${
                  t.visible ? "border-l-4 border-l-green-500" : "border-l-4 border-l-border opacity-75"
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-4 lg:items-start">
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-heading font-semibold text-lg text-foreground">{t.name}</h3>
                      {t.role && (
                        <span className="text-sm bg-muted px-2.5 py-0.5 rounded-lg text-muted-foreground font-medium">
                          {t.role}
                        </span>
                      )}
                      <span
                        className={`text-sm px-2.5 py-0.5 rounded-lg font-medium ${
                          t.visible
                            ? "bg-green-500/10 text-green-700"
                            : "bg-orange-500/10 text-orange-700"
                        }`}
                      >
                        {t.visible ? "Visible" : "Hidden"}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                      "{t.quote}"
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                      {t.email && <span>Email: {t.email}</span>}
                      {t.phone && <span>Phone: {t.phone}</span>}
                      <span>Submitted: {new Date(t.createdAt).toLocaleDateString("en-IN")}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 shrink-0 lg:pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground font-medium">
                        {t.visible ? "On" : "Off"}
                      </span>
                      <Switch
                        checked={t.visible}
                        onCheckedChange={() => handleToggle(t.id)}
                      />
                    </div>

                    {deleteConfirm === t.id ? (
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(t.id)}
                          className="rounded-lg text-sm"
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setDeleteConfirm(null)}
                          className="rounded-lg text-sm"
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setDeleteConfirm(t.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
