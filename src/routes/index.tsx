import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Code,
  Rocket,
  Zap,
  Palette,
  Server,
  Layers,
} from "lucide-react";
import { getServerInfo } from "@/server/functions";

export const Route = createFileRoute("/")({
  loader: () => getServerInfo(),
  component: HomePage,
});

const techStack = [
  "React 19",
  "TanStack Start",
  "TanStack Router",
  "TypeScript",
  "Tailwind CSS 4",
  "shadcn/ui",
  "Base UI",
  "Nitro",
  "Vite + Rolldown",
];

function HomePage() {
  const { message, timestamp, environment } = Route.useLoaderData();

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Eser's TanStack Start Boilerplate
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
          A minimal, type-safe full-stack React starter with modern tooling.
          Built with TanStack Start, React 19, shadcn/ui, and Nitro.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <Zap className="w-8 h-8 mb-2 text-yellow-500" />
            <CardTitle>Lightning Fast</CardTitle>
            <CardDescription>
              Vite + Rolldown for sub-second builds. Hot module replacement that
              just works.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Code className="w-8 h-8 mb-2 text-blue-500" />
            <CardTitle>Type Safe</CardTitle>
            <CardDescription>
              End-to-end TypeScript with strict mode. Type-safe routing and
              server functions.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Server className="w-8 h-8 mb-2 text-green-500" />
            <CardTitle>Server Functions</CardTitle>
            <CardDescription>
              Nitro-powered backend with RPC-style server calls. Full TypeScript
              inference.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Palette className="w-8 h-8 mb-2 text-pink-500" />
            <CardTitle>Beautiful UI</CardTitle>
            <CardDescription>
              shadcn/ui components built on Base UI primitives. Accessible and
              customizable.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Layers className="w-8 h-8 mb-2 text-orange-500" />
            <CardTitle>Tailwind CSS 4</CardTitle>
            <CardDescription>
              Latest Tailwind with CSS-first configuration. Dark mode with
              system preference.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Rocket className="w-8 h-8 mb-2 text-purple-500" />
            <CardTitle>Full Stack SSR</CardTitle>
            <CardDescription>
              Server-side rendering with hydration. Deploy anywhere Nitro runs.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-lg">Server Function Demo</CardTitle>
          <CardDescription>
            Data fetched from a Nitro server function
          </CardDescription>
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
        <Button
          render={
            <a
              href="https://tanstack.com/start/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Docs
            </a>
          }
        />
      </div>
    </div>
  );
}
