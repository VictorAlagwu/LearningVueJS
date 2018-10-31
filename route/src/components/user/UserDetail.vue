<template>
<div>
    <h3>Some User Details</h3>
      <p>
        Loaded User ID {{ $route.params.id }}
    </p>
    <router-link :to="{name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'en', q:88 } }" tag="button" class="btn btn-default">
        Edit User
    </router-link>
</div>
</template>