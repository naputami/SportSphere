"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { loginAction } from "./action";
import { IconApps } from "@/components/iconApps";
import { loginWithGoogleAction } from "../(oauth-action)/oauth.google-action";
import toast from "react-hot-toast";

export default function page() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state?.message);
    } else if (state?.status === "error") {
      toast.error(state?.message);
    }
  }, [state]);
  return (
    <div className="bg-dark-navy-theme w-screen h-screen grid md:grid-cols-2">
      <div className="hidden md:grid px-10 py-8">
        <div>
          <Link href="/">
            <div className="flex gap-2">
              <IconApps />
              <div className="text-yellow-400 text-2xl font-bold">
                Sport Sphere
              </div>
            </div>
          </Link>
        </div>
        <div className="text-white text-3xl w-4/5">
          Login for Sport Community recommendations around!
        </div>
      </div>
      <div className="bg-white border-l rounded-s-3xl px-16 space-y-8 py-24">
        <div>
          {" "}
          <div className="text-dark-navy-theme text-3xl font-bold">Login</div>
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
                defaultValue={state?.data?.email}
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
                defaultValue={state?.data?.password}
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full max-w-sm border border-slate-400 rounded-lg h-10 px-4 text-sm"
              />
            </label>
          </div>
          <div>
            <button
              disabled={pending}
              className="w-full bg-dark-navy-theme max-w-sm btn text-white my-4 hover:bg-dark-navy-theme"
            >
              {pending && <span className="loading loading-spinner"></span>}
              Login
            </button>
          </div>
        </form>
        <form action={loginWithGoogleAction} className="space-y-3">
          <p>Other Method</p>
          <button className="btn btn-neutral text-white">Continue With Google</button>
        </form>
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-500 hover:underline hover:underline-offset-4"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
