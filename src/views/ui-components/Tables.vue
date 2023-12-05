<script setup>

import UiChildCard from '@/components/shared/UiChildCard.vue';


</script>

<template>
    <v-row class="month-table">
        <v-col cols="12" sm="12">
            <UiChildCard title="Categorias">
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">Nombre</th>
                            <th class="text-left">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in categories" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.stock }}</td>
                        </tr>
                    </tbody>
                </v-table>

            </UiChildCard>
        </v-col>
    </v-row>
</template>

<script>

export default {

    data() {
        return {
            categories: []
        }
    },
    async created() {
        const base_url = "http://localhost:3005"

        try {
            const response = await fetch(`${base_url}/categories`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                const categories = await response.json();

                console.log(categories);
                this.categories = categories
            }


        } catch (error) {
            console.log(error);
        }
    }

}
</script>