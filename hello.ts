import { transform } from "./transform.ts"
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve((req: Request) => {
	const u = new URL(req.url);
	const n = u.searchParams.get('name')
	return new Response("Hello, " + transform(n) + "!");
})