import { reactive } from "vue";
export const store = reactive({
    cerca: "", films: "", series: "", bandieraUk: "",


    collections: [{
        serie:
            [
                {
                    language: [],
                    flags: [],
                },
            ],
        movie:
            [
                {
                    language: [],
                    flags: [],

                },
            ]
    }]
})