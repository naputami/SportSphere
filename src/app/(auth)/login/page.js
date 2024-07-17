"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "./action";

export default function page() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  return (
    <div className="bg-indigo-950 w-screen h-screen grid md:grid-cols-2">
      <div className="hidden md:grid space-y-32 px-10 py-8">
        <div className="flex items-end">
          {/* harusnya ada logo */}
          <div className="text-yellow-400 text-2xl font-bold">Eventify</div>
        </div>
        <div className="text-white text-3xl w-4/5">
          Discover tailored events. Sign up for personalized recommendations
          today!
        </div>
      </div>
      <div className="bg-white border-l rounded-s-3xl px-16 space-y-8 py-24">
        <div>
          {" "}
          <div className="text-indigo-900 text-3xl font-bold">Login</div>
          <p>Welcome back, please login</p>
        </div>
        <form action={formAction} className="space-y-3">
          <div>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-slate-600 text-sm">
                  E-mail Address
                </span>
              </div>
              <input
                name="email"
                type="email"
                placeholder="Enter your e-mail"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-slate-600 text-sm">
                  Password
                </span>
              </div>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm"
              />
            </label>
          </div>
          <div>
            <button
              disabled={pending}
              className="w-full bg-indigo-950 max-w-sm py-2 border rounded-full text-white my-4"
            >
              Login
            </button>
            {!state?.success && <p>{state?.message}</p>}
            {state?.success && <p>{state?.message}</p>}
          </div>
        </form>
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-600 hover:underline hover:underline-offset-4"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
