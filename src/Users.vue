<template>
    <div>
        <h2>Users</h2>
        <table>
            <tr>
                <td> Antonio Ćosić </td>
                <td> Nova ulica 8 </td>
                <td> antcosic@foi.hr </td>
            </tr>
        </table>
        <button @click="fetchData">Fetch users</button>

    </div>

</template>

<script>
    import axios from 'axios';
    export default{

        methods: {
            fetchData(){
                axios.get('https://jsonplaceholder.typicode.com/users')
                        .then((response) => {

                            console.log(response.data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });

                }

        },
    }
</script>