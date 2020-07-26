import Head from 'next/head';
import Template from '../../component/layout';
import Link from 'next/link';

export default function Conten(){
    return(
        <Template>
            <br/>
                <div className="jumbotron jumbotron-fluid">
                <div class="col-12 alert-secondary">
                    <h2 class="list-group-item active">Tugas</h2>
                    <hr></hr>
                    <h5>Tugas 1 Materi Teknik Pengembangan Paragraf</h5>
                    <h7 class="alert-light">Tugas . Sel, 14-07-20</h7>
                    <p> Kerjakan tugas berikut setelah melihat menyimak materi dari saya dan kelompok dan menuliskan komen kehadiran di materi saya!<br/>
                    1. Sebutkan 5 Jenis Paragraf berdasarkan Sifat hubungannya! (Berdasar sifat hubungan antar kalimat dalam)<br/>
                    2. Susunlah 5 paragraf yang Anda sebutkan pada nomor 1 di atas, dengan topik berkaitan dengan ilmu yang kalian pelajari di STIKOM PGRI Banyuwangi!
                    </p>
                    <br/>
                <div class="input-group mb-3">
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"></input>
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>
                <div class="input-group-prepend">
                <Link href="/blog/tugas">
                    <button class="input-group-text btn btn-primary" id="inputGroupFileAddon01">Upload</button>
                </Link>
                </div>
                </div>
                </div>
                </div>
            </Template>
    )
}