import {HTTP} from '@/services/api.js'

export default {
    state:{
        propiedades:[],
        pagination:{
            pageQuantify:null,
            NumberItens:15,
            activePage:1
        }
    },
    mutations:{
        setPropiedades(state,arr){
            state.propiedades = arr;
        },
        setPagination(state,obj){
            state.pagination[obj.key] = obj.val;
        }
    },
    actions:{
        getProiedades({state,commit},filterType){
            return new Promise((resolve,reject)=>{
                HTTP.get('keycash/challenge').then(res =>{
                    const {data} = res;
                    let filter;
                    switch(filterType){
                        case 'desc':
                            filter = ((a,b) =>{return a.price > b.price ? 1 : -1;});
                        break;
                        case'cresc':
                            filter = ((a,b) =>{return a.price < b.price ? 1 : -1;});
                        break;
                        case 'numberbathrooms':
                            filter = ((a,b) =>{return a.bathrooms < b.bathrooms ? 1 : -1;});  
                        break;
                        case 'area':
                            filter = ((a,b) =>{return a.usableArea < b.usableArea ? 1 : -1;});  
                        break;
                        default:   
                            filter = ((a,b) =>{return a.price > b.price ? 1 : -1;});
                        break;          
                    }
                    console.log(data)
                    const dataFilter = data.filter(e => e.publish == true && Object.keys(e.address).length > 0).sort(filter);
                    let l = dataFilter.length,s = state.pagination.NumberItens;
                    let quant = Math.ceil(l/s);
                    commit('setPagination',{key:'pageQuantify',val:quant})
                    commit('setPropiedades',dataFilter)
                    resolve(dataFilter)
                })
            })
        },
        getCurrentProiedade({state},id){
            return new Promise((resolve,reject)=>{
                const {propiedades} = state;
                const filterItem = propiedades.filter(el => el.id === id)[0];
                resolve(filterItem)
            })
            
        },

    },
    getters:{
        getterPropiedade(state) {
            const {pagination,propiedades} = state;
            const start =( pagination.activePage-1) * pagination.NumberItens,
            end = start +  pagination.NumberItens;
            return propiedades.slice(start, end);
        },
        getterAll(state){
            return state.propiedades;
        },
        getGeolocalization(state,getters){
            const arr = []
            const {getterPropiedade} = getters;
            getterPropiedade.forEach(el => {
                const{geolocation} = el.address;
                arr.push({lat:geolocation.lat,lng:geolocation.lng})
            });
            return arr
           
         },
        getPagination(state){
            const {pagination} = state;
            const pages = [];
            for(let i = 1; i <= pagination.pageQuantify; i++){
                pages.push(i)
            }
            return pages
        },
        getActivePage(state){
            const {pagination} = state;
            return pagination.activePage
        }
    }
}