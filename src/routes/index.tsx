import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Rocket, Zap } from "lucide-react";
import { getServerInfo } from "@/server/functions";

export const Route = createFileRoute("/")({
  loader: () => getServerInfo(),
  component: HomePage,
});

function HomePage() {
  const { message, timestamp, environment } = Route.useLoaderData();

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Eser's TanStack Start Boilerplate</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          This is a full-stack React application powered by TanStack Start, React 19,
          and TypeScript.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <Zap className="w-8 h-8 mb-2 text-yellow-500" />
            <CardTitle>Fast by Default</CardTitle>
            <CardDescription>
              Built on Vite with Rolldown for lightning-fast builds.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Code className="w-8 h-8 mb-2 text-blue-500" />
            <CardTitle>Type Safe</CardTitle>
            <CardDescription>
              End-to-end type safety with TypeScript strict mode.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Rocket className="w-8 h-8 mb-2 text-purple-500" />
            <CardTitle>Full Stack</CardTitle>
            <CardDescription>
              Server functions with Nitro backend out of the box.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-lg">Server Response</CardTitle>
          <CardDescription>Data fetched from a server function</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">
            <span className="font-medium">Message:</span> {message}
          </p>
          <p className="text-sm">
            <span className="font-medium">Environment:</span> {environment}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Timestamp:</span> {timestamp}
          </p>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <Button asChild>
          <a
            href="https://tanstack.com/start/latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Docs
          </a>
        </Button>
      </div>
    </div>
  );
}
