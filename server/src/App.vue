<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>VueJs Routing</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <button class="btn btn-info" @click="fetchInfo">Fetch Data</button>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in users">
                        {{ user.username }} | {{ user.email}}
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: []
            }
        },
        methods: {
            submit() {
                this.$http.post('', this.user)
                    .then (response => {
                        console.log(response);
                    }, error => {
                        console.log (error);
                    });
                ;
            },
            fetchInfo() {
                this.$http.get('')
                        .then (response => {
                            return response.json();
                        }, error => {
                            console.log(error);
                        })
                        .then (data => {
                            const resultArray = [];
                            for (const key in data) {
                                resultArray.push(data[key]);
                            }
                            this.users = resultArray;
                        });
            }
        }
    }
</script>

<style>
</style>
