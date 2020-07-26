import Head from 'next/head';
import Template from '../../component/layout';
import Link from 'next/link';

export default function Anggota(){
    return(
        <Template>
            <br/>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                    <h3 class="alert alert-primary text-center">Teacher</h3>
                    <hr></hr>
                    <p class="float-center">
                        <br/>
                        <img class="rounded-circle border border-dark" src="/img/download.jpg" width="55" height="55"></img>
                        &nbsp; &nbsp; &nbsp; Tri Agus, M.Pd.
                        <hr></hr>
                        </p><br/><br/>
                    <h3 class="alert alert-primary text-center">Classmates</h3>
                    <h6 class="lead float-right">Students 05</h6>
                    <hr></hr>
                    <br/>
                    <p class="float-center">
                        <br/>
                        <img class="rounded-circle border border-dark" src="/img/BuzzFeed.jpg" width="55" height="55"></img>
                        &nbsp; &nbsp; &nbsp; Ni Made Tembang Ayundini
                        <hr></hr>
                        <br/>
                        <img class="rounded-circle border border-dark" src="/img/unnamed.jpg" width="55" height="55"></img>
                        &nbsp; &nbsp; &nbsp; Nur Khofifah
                        <hr></hr>
                        <br/>
                        <img class="rounded-circle border border-dark" src="/img/Gambar-Kartun-Berhijab-lucu.jpg" width="55" height="55"></img>
                        &nbsp; &nbsp; &nbsp; Nuria Safitri
                        <hr></hr>
                        <br/>
                        <img class="rounded-circle border border-dark" src="/img/th.jpg" width="55" height="55"></img>
                        &nbsp; &nbsp; &nbsp; Nur Alina
                        <hr></hr>
                        <br/>
                        <img class="rounded-circle border border-dark" src="/img/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f645558484f4a4a646e6a5f7243413d3d2d3637393931333433392e31353738646333636334656465643.jpg" width="55" height="55"></img>
                        &nbsp; &nbsp; &nbsp; Nanda Dian Islami
                        <hr></hr>
                    </p>
                    <br/>
                    </div>
                </div>
            </Template>
    )
}