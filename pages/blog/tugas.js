import Head from 'next/head';
import Template from '../../component/layout';
import Link from 'next/link';

export default function Tugas(){
    return(
        <Template>
            <br/>
                <div className="jumbotron jumbotron-fluid">
                <div class="col-12 alert-secondary">
                    <h2 class="list-group-item active">Tugas 1 Materi Teknik Pengembangan Paragraf</h2>
                    <hr></hr>
                    <div class="col-12 alert-secondary">
                    <h5>Tugas 1 Materi Teknik Pengembangan Paragraf</h5>
                    <h7 class="alert-light">Tugas . Sel, 14-07-20</h7>
                    <p> Kerjakan tugas berikut setelah melihat menyimak materi dari saya!<br/>
                    1. Sebutkan 5 Jenis Paragraf berdasarkan Sifat hubungannya! (Berdasar sifat hubungan antar kalimat dalam)<br/>
                    2. Susunlah 5 paragraf yang Anda sebutkan pada nomor 1 di atas, dengan topik berkaitan dengan ilmu yang kalian pelajari di STIKOM PGRI Banyuwangi!
                    </p>
                    </div>
                    <Link href="/blog/nextTugas1">
                        <button type="button" class="btn btn-primary">Kerjakan</button>
                    </Link>
                    <br/><br/><br/>
                    </div>
                <div class="col-12 alert-secondary">
                <h2 class="list-group-item active">Tugas 2 Materi Kalimat Efektif</h2>
                    <h5>Tugas 2 Materi Kalimat Efektif</h5>
                    <h7 class="alert-light">Tugas . Sel, 21-07-20</h7>
                    <p> Berikanlah contoh dari keempat hal tersebut!<br/>
                        1) Kesatuan (Kohesi)<br/>
                        2) Kesejajaran (Koherensi)<br/>
                        3) Penekanan<br/>
                        4) Kehematan<br/>
                        <br/>
                        Persyaratan lain yang harus dipenuhi agar kalimat menjadi efektif adalah;</p>
                    <Link href="/blog/nextTugas2">
                    <button type="button" class="btn btn-primary">Kerjakan</button>
                    </Link>
                    <br/><br/>
                </div>
                </div>
            </Template>
    )
}