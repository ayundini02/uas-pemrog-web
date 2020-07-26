import Head from 'next/head';
import Template from '../component/layout';

export default function Profil(){
    return(
        <div>
            <Template>
            <div class="data text-center">
                <br/>
                <hr></hr>
                <h2 class="alert alert-success">Data Diri:</h2>
                <hr></hr>
                <img class="rounded-circle" src="BuzzFeed.jpg" width="300" height="300"></img>
                <br/><br/>
                <p>Nama: Ni Made Tembang Ayundini</p>
                <p>Tempat, ttl: Banyuwangi, 02-09-1999</p>
                <p>Jenis Kelamin: Perempuan</p>
                <p>Agama: Islam</p>
                <p>Alamat: Perum Graha Indah Klatak F/10</p>
                <p>Kewarganeraan: Indonesia</p>
                <p>Email: ayundini@gmail.com</p>
                <p>No.Telp: (0333)6783420</p>
                <br/><br/>
                </div>
            </Template>
        </div>
    )
}