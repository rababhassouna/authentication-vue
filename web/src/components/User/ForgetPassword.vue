<template>
  <div class="container mt-5 mb-5">
    <div class="row text-center">
      <div class="m-auto text-center w-50">
        <h1 class="mb-5">Reset Password</h1>
        <form method="POST" action="https://kyro.ms/password/email">
          <input type="hidden" name="_token" value="xLIRrJvNJs5D6oRSwbVLB1YpCe0xkCFPV7I07zXe">                    <div class="form-group">
          <input id="email" type="email" class="form-control " name="email" value="" required="" autocomplete="email" autofocus="" placeholder="Enter email">

        </div>
          <button type="submit" class="btn btn-primary btn-block mt-2">Send Password Reset Link</button>
        </form>
      </div>
    </div>
  </div>
</template>
