
import {useRouter} from 'next/router';
function Doc(){
    const router = useRouter();
    const {params=[]} = router.query;
    
    if(params.length==1){
        return <div>
            Viewing Features for {params[0]}
        </div>
    }

    if(params.length==2){
        return <div>
            Viewing Features for {params[0]} and {params[1]}
        </div>
    }
}