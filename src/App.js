import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import image from "./img/caraousel.svg";
function App() {
  return (
    <div className='App'>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">PersonalWebs</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education">Pendidikan</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#jadwal-kuliah">Jadwal Kuliah</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#aktivitas">Aktivitas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='carousel'>
        <div className='row'>
          <div className='col-md-6'>
          </div>
          <div className='col-md-6 text-carousel'>
            <div className='text-title' >
              Developer
            </div>
            <div>
              Hello , My name Rizal Prasetya Nugraha
            </div>
            <div>You can call me Rizal</div>
            <div>
              I have an experience 3 year on Frontend Developer
            </div>
          </div>
        </div>

      </div>
      <div className='row' style={{ marginTop: '30px' }}>
        <div className='text-title'>
          Pendidikan
        </div>
        <div className='container-education' id='education'>
          <div className='education-list' style={{ marginBottom: '20px' }}>
            <div className='left-contain'>
              <div style={{ fontWeight: '500', fontSize: '26px' }}>
                Information System
              </div>
              <div>Binus University</div>
            </div>
            <div>
              2019 - Present
            </div>
          </div>
          <div className='education-list' style={{ marginBottom: '20px' }}>
            <div className='left-contain'>
              <div style={{ fontWeight: '500', fontSize: '26px' }}>
                Teknik Komputer & Jaringan
              </div>
              <div>SMK N 2 Depok Sleman Yogyakarta</div>
            </div>
            <div>
              2014 - 2018
            </div>
          </div>
        </div>
      </div>
      <div className='row' style={{ marginTop: '30px' }}>
        <div className='text-title'>
          Jadwal Kuliah
        </div>
        <div className='container-jadwal' id='jadwal-kuliah'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Week</th>
                <th scope="col">Session</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Meeting Detail</th>
                <th scope="col">URL</th>


              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>02 Dec 2022	</td>
                <td>17:20 - 19:00	</td>
                <td>TBA</td>
                <td>TBA</td>


              </tr>
              <tr>
                <th scope="row">5</th>
                <td>7</td>
                <td>17 Dec 2022		</td>
                <td>09:20 - 10:10	</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>8</td>
                <td>17 Dec 2022		</td>
                <td>10:11 - 11:00	</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>9</td>
                <td>14 Jan 2022	</td>
                <td>11:20 - 13:00	</td>
                <td>TBA</td>
                <td>TBA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='row' style={{ marginTop: '30px' }}>
        <div className='text-title'>
          Aktivitas
        </div>
        <div className='container-education' id='aktivitas'>
          <div className='education-list' style={{ marginBottom: '20px' }}>
            <div className='left-contain'>
              <div style={{ fontWeight: '500', fontSize: '26px' }}>
                Wakil Ketua Acara Donor Darah
              </div>
              <div>Palang Merah Remaja SMK N 2 Depok Sleman</div>
            </div>
            <div>
              2016 - 2017
            </div>
          </div>
          <div className='education-list' style={{ marginBottom: '20px' }}>
            <div className='left-contain'>
              <div style={{ fontWeight: '500', fontSize: '26px' }}>
                Staff
              </div>
              <div>Gerakan Insan Anti Narkoba & Anti Seks Bebas SMK N 2 Depok Sleman Yogyakarta</div>
            </div>
            <div>
              2016 - 2017
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
