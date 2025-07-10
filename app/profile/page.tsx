import AppShell from "@/components/app-shell";

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Profile Page Content */}
        <main className="flex-grow flex flex-col items-center justify-center p-6">
          <div className="flex flex-col gap-6 w-full max-w-4xl">
            <h1 className="text-2xl font-bold text-center">User Profile</h1>
            <p className="text-muted-foreground text-sm text-center">
              Manage your account details and preferences.
            </p>
            {/* Additional profile content can go here */}
          </div>
        </main>
      </div>
    </AppShell>
  );
}
