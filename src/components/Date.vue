
<template>
    <v-menu
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px">
       
        <template v-slot:activator="{ on }">
            <v-text-field
                v-model="computedDateFormatted"
                :label="label"
                prepend-icon="event"
                mask="##/##/####"
                v-on="on">
            </v-text-field>
        </template>

        <v-date-picker 
            v-model="date" 
            no-title
            locale="pt-br"></v-date-picker> 
    </v-menu>
</template>

<script>

export default {
    data() {
        return {
            date: new Date().toISOString().substr(0, 10),
        }
    },
    methods: {
        formatDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        parseDate (date) {
            if (!date || date.length < 8) return null

            if(!date.includes("/")){
                let day = date.substring(0,2);
                let month = date.substring(2,4);
                let year = date.substring(4,9);
                date = day + "/" + month + "/" + year;
            }
            const [day, month, year] = date.split("/");
            return `${year}-${month}-${day}`;
        }
    },
    computed: {
        computedDateFormatted: {
            get() {
                return this.formatDate(this.date);
            },
            set(value) { 
                if(value && value.length >= 8){
                    let parsedDate = this.parseDate(value);
                    this.date = new Date(parsedDate).toISOString().substr(0, 10);
                    this.$emit('update:value', parsedDate);
                }
            }   
        }
        
    },
    created() {
        let formatedDate = this.formatDate(this.value);
        this.date = new Date(this.parseDate(formatedDate)).toISOString().substr(0, 10);
    },
    props: {
        value: String,
        label: String,
        required: Boolean
    }
}
</script>
