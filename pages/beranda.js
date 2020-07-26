import Template from '../component/layout';
import Link from 'next/link';
import Footer from '../component/footer';

export default function Home(){
    return(
        <div>
            <Template>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <img class="card-img-top" src="logo-stikom-baru.png"></img>
                <h1 class="display-4">STIKOM SP4.3 BAHASA INDONESIA</h1>
                <p class="lead">Perkuliahan Hari Selasa Sesi 1-3 (Pagi)</p>
            </div>
            </div>
            <div className="row">
                    <div className="col-sm-4 alert-secondary text-center">
                        <h3><u>Diskusi</u></h3>
                        <br/>
                        <p class="lead">
                            <h6><u>Perkuliahan:</u></h6>
                            Matkul: Bahasa Indonesia<br/>
                            Hari: Selasa<br/>
                            Kelas: SP4.3<br/>
                            Sesi: 1-3 (Pagi)
                        </p>
                    </div>
                    <div className="col-sm alert-light">
                    <img class="rounded-circle border border-dark" src="/img/BuzzFeed.jpg" width="55" height="55"></img>
                    &nbsp; Ni Made Tembang Ayundini
                        <br/>
                        <textarea class="form-control border border-dark" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type="button" class="btn btn-primary float-left">Kirim</button>
                        <br/><br/>
                        <input type="text" class="form-control border-dark"></input>
                        <button type="button" class="btn btn-primary float-right">Balas</button>
                    </div>
                   </div>
                   <br/><br/><br/>
            </Template>
            </div>
            
    );
}