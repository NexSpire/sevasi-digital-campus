import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, Eye, EyeOff, ShieldCheck } from "lucide-react";
import logoImg from "@/assets/logo.png";

const AdminLogin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        // Hard navigation bypasses React reconciliation entirely —
        // the page reloads fresh and sessionStorage is read on mount.
        window.location.replace("/admin/dashboard");
      } else {
        setLoading(false);
        setError("Invalid email or password");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="card-modern p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <img src={logoImg} alt="Logo" className="w-10 h-10 object-contain" />
              </div>
            </div>
            <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Admin Login</h1>
            <p className="text-base text-muted-foreground">
              Sevasi High School — Administration Panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-heading font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                placeholder="admin@school.com"
                className="h-12 rounded-xl text-base"
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-base font-heading font-semibold flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  placeholder="Enter your password"
                  className="h-12 rounded-xl text-base pr-12"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <EyeOff className={`w-5 h-5 ${showPassword ? "" : "hidden"}`} />
                  <Eye className={`w-5 h-5 ${showPassword ? "hidden" : ""}`} />
                </button>
              </div>
            </div>

            {/* Always in DOM — only className changes, no insertBefore */}
            <div className={`text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3 font-medium ${error ? "" : "hidden"}`}>
              {error}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 font-heading font-semibold text-base bg-primary hover:bg-primary/90 rounded-xl transition-all duration-300 hover:shadow-md"
            >
              {/* Always in DOM — only className changes, no insertBefore */}
              <span className="flex items-center justify-center gap-2">
                <span className={`w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin ${loading ? "" : "hidden"}`} />
                <ShieldCheck className={`w-5 h-5 ${loading ? "hidden" : ""}`} />
                <span>{loading ? "Verifying..." : "Sign In"}</span>
              </span>
            </Button>
          </form>

          <div className="mt-6 pt-5 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              This area is restricted to authorized administrators only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
