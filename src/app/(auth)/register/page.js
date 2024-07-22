"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerAction } from "./action";
import { IconApps } from "../../../components/iconApps";
import { loginWithGoogleAction } from "../(oauth-action)/oauth.google-action";

export default function page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <div className="bg-dark-navy-theme w-screen h-screen grid md:grid-cols-2">
      <div className="hidden md:grid px-10 py-8">
        <div>
          <a href="/">
            <div className="flex gap-2">
              <IconApps />
              <div className="text-yellow-400 text-2xl font-bold">
                Sport Sphere
              </div>
            </div>
          </a>
        </div>
        <div className="text-white text-3xl w-4/5">
          Sign up for Sport Community recommendations around!
        </div>
      </div>
      <div className="bg-white border-l rounded-s-3xl px-16 space-y-8 py-24">
        <div>
          <div className="text-indigo-900 text-3xl font-bold">
            Create Account
          </div>
          <p>Create an account to continue</p>
        </div>
        <form action={formAction} className="space-y-3">
          <div>
            <label className="form-control w-full max-w-sm">
              <div className="label">
                <span className="label-text text-slate-600 text-sm">
                  Full Name
                </span>
              </div>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm"
              />
            </label>
          </div>
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
              Create Account
            </button>
          </div>
          {state?.success === "false" && (
            <p className="text-red-600">{state.message}</p>
          )}
          {state?.success === "true" && <p>Register success, please login</p>}
        </form>
        <form action={loginWithGoogleAction} className="space-y-3">
          <p>Other Method</p>
          <button className="btn btn-neutral">Continue With Google</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-600 hover:underline hover:underline-offset-4"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
