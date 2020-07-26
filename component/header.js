import Head from "next/head";
import Link from 'next/link';

export default ()=>{
    return(
        <div>
            <Head>
                <title>STIKOM PGRI BANYUWANGI</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="../css/bootstrap.css" rel="stylesheet" />
                <script src="../js/jquery.js"></script>
                <script src="../js/bootstrap.js"></script>
            </Head>
            <nav class="navbar navbar-expand-lg alert alert-primary navbar-primary">
              <a class="navbar-brand" href="#">Stikom</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link href="/beranda">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" href="/blog/materi">
                      <a className="nav-link">Materi</a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" href="/blog/tugas">
                      <a className="nav-link">Tugas</a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" href="/profil">
                      <a className="nav-link">Profile</a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" href="/anggota/peserta">
                      <a className="nav-link">People</a>
                    </Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" href="/index">
                      <a className="nav-link">Logout</a>
                    </Link>
                    </li>
                  </ul>
                  <img class="rounded-circle border border-primary" src="/img/BuzzFeed.jpg" width="55" height="55"></img>
                  &nbsp;
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </nav>
              </div>
    )
}