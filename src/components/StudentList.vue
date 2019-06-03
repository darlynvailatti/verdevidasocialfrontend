<template>
    <div>
        <v-card-title>
            <v-btn fab dark small color="primary"
                @click.prevent="create()">
                <v-icon>add</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Pesquisar"
                single-line
                hide-details>
            </v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="students"
            :total-items="totalItems"
            class="elevation-1"
            :pagination.sync="pagination">
            <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">{{ $formatDate(props.item.birthDate) }}</td>
                <td class="text-xs-right">
                        <v-btn fab dark small color="primary"
                            @click.prevent="remove(props.item)">
                            <v-icon dark>remove</v-icon>
                        </v-btn>
                        <v-btn fab dark small color="primary"
                            @click.prevent="edit(props.item)">
                            <v-icon dark>edit</v-icon>
                        </v-btn>

                </td>
            </template>
        </v-data-table>
    </div>

</template>

<script>

export default {
    data(){
        return {
            search: null,
            pagination: null,
            students: [],
            headers: [
                {
                    text: 'Nome',
                    align: 'left',
                    value: 'name'
                },
                {
                    text: 'Data Nascimento',
                    align: 'left',
                    value: 'birthDate'
                },
                {
                    text: 'Ações',
                    align: 'right',
                    sortable: false,
                    value: 'actions'
                }
            ]
        }
    },
    watch: {
        pagination: {
            handler(){
                this.loadFromResource();
            },
            deep: true
        },
        search: {
            handler(){
                this.loadFromResource();
            }
        }
    },
    methods: {
        loadFromResource(){
            if(this.pagination == null)
                return;
            let paginationConfig = this.configurePagination();
            this.resource.getByNameWithPagination(paginationConfig)
                .then(data => {
                    this.students = data.elements,
                    this.pagination.totalItems = data.totalElements
                });
        },
        configurePagination(){
            return {
                pageSize: this.pagination.rowsPerPage,
                pageNumber: this.pagination.page - 1,
                search: this.search ? this.search : "",
                sort: {
                    orders: [
                        {
                            direction: this.pagination.descending ? 'DESC' : 'ASC',
                            property: this.pagination.sortBy
                        }
                    ]
                }
            };
        }


    },
    computed: {
        totalItems(){
            if(this.pagination == null)
                return 0;
            return this.pagination.totalItems;
        }
    },
    props: {
        edit: Function,
        create: Function,
        remove: Function,
        resource: Object
    },
    created() {
        this.loadFromResource();
    }

}
</script>

<style>

</style>


