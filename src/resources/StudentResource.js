import HttpClient from '@/services/HttpClient'

export default class StudentResource{

    resource = "/students";

    getAll(){
        return HttpClient.get(this.resource)
            .then(response => {
                return response.data;
            })
    }

    getByNameWithPagination(pagination){
        return HttpClient.post(this.resource + '/by/name/pagination?name='+pagination.search, pagination)
            .then(response => {
                return response.data;
            });
    }

    confirm(student){
        return HttpClient.post(this.resource, student);
    }
    
}

