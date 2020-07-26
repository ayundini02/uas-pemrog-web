import Header from '../component/header';
import Footer from '../component/footer';

export default ({children})=>{
    return(
        <div>
            <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            {children}
                        </div> 
                    </div>
                </div>
            <Footer/>
        </div>
    )
}