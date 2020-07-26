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
                    <h5>Tugas Materi Kalimat Efektif</h5>
                    <h7 class="alert-light">Tugas . Sel, 21-07-20</h7>
                    <p> Berikanlah contoh dari keempat hal tersebut!<br/>
                        1) Kesatuan (Kohesi)<br/>
                        2) Kesejajaran (Koherensi)<br/>
                        3) Penekanan<br/>
                        4) Kehematan<br/>
                        <br/>
                        Persyaratan lain yang harus dipenuhi agar kalimat menjadi efektif adalah;</p>
                
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