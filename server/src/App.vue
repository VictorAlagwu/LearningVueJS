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
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br>
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
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            },
            fetchInfo() {
                this.resource.getData({node: this.node})
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
        },
        created() {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };
                this.resource = this.$resource('{node}.json', {}, customActions);
        },
    }
</script>

<style>
</style>
