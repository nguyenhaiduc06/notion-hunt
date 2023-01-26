<div
  class="container h-screen mx-auto flex flex-col items-center justify-center"
>
  <div class="max-w-sm w-full">
    <h1 class="text-3xl font-semibold mb-12">Login</h1>
    <div class="grid gap-3">
      <form action="">
        <div class="grid gap-4">
          <label for="UserEmail" class="block text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="UserEmail"
            placeholder="Your email address"
            class="w-full h-10 rounded border-gray-200 shadow-sm text-sm"
          />
          <a
            class="inline-flex items-center justify-center h-10 px-4 rounded bg-blue-500 text-sm text-white shadow-md"
            href="/dashboard">Continue with email</a
          >
        </div>
      </form>
      <div class="relative my-5">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300" />
        </div>
        <div class="relative flex justify-center text-xs">
          <span class="bg-white px-2 text-slate-600">Or</span>
        </div>
      </div>
      <a
        class="inline-flex items-center justify-center border border-gray-200 h-10 px-4 rounded text-sm text-slate-700 gap-1"
        href="/dashboard"
      >
        <i class="ri-apple-fill" />
        Continue with Apple
      </a>
      <a
        class="inline-flex items-center justify-center border border-gray-200 h-10 px-4 rounded text-sm text-slate-700 gap-1"
        href="/dashboard"
      >
        <i class="ri-facebook-circle-fill text-blue-600" />
        Continue with Facebook
      </a>
      <a
        class="inline-flex items-center justify-center border border-gray-200 h-10 px-4 rounded text-sm text-slate-700 gap-1"
        href="/dashboard"
      >
        <i class="ri-google-fill text-red-500" />
        Continue with Google
      </a>
    </div>
  </div>
</div>
