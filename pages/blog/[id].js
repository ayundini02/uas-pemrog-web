import {useRouter} from "next/router";
import Template from "../../component/layout"

const Id = () => {
    const router = useRouter();
    return(
        <Template>
            <div className="row">
                <div className="col-sm alert-primary">
                    Ini Adalah Id
                </div>
            </div>
        </Template>
    )
}
export default Id