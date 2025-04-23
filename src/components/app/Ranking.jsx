import React, { useContext } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useGlobalApp } from '../../contexts/GlobalContextApp'

const Ranking = () => {
  const { user } = useAuth()
  const { correctQuestion, wrongQuestion } = useGlobalApp()
  console.log(user)
  return (
    <main className="flex-grow-1 main-dashboard-app d-flex flex-column">
      <section className="content-main-dashboard-app d-flex flex-column align-items-center flex-grow-1 w-100 p-5" >
        <section className="ranking w-100">
          <div className="rankinng-profile d-flex justify-content-center align-items-center flex-column">
            <div className="container-rankinng-profile-img">
              <img src={user.profile_img} alt="" />
            </div>
            <span className="fs-4 font-din-bold text-light ">{user.username}</span>
            <div className="personal-scoreboard d-flex m-3">
              <div className="border-sm p-2 rounded-4"><span className="fs-5 font-din-bold text-light ">{correctQuestion} ACERTOS</span></div>
              <div className="border-sm p-2 rounded-4"><span className="fs-5 font-din-bold text-light ">{wrongQuestion} ERROS</span></div>
            </div>
          </div>
          <div class="hr-ranking-dashboard m-4"></div>
          <div class="d-flex justify-content-center align-items-center flex-column">
          <h1 class="fs-2 font-din-bold text-light mb-4">Ranking</h1>
          <ul class="ranking-profiles w-100 d-flex flex-column align-items-center">
            <li class="border-sm rounded-4 p-3 mb-3">
              <div class=" d-flex flex-row align-items-center">
                <div class="container-li-rankinng-profile-img">
                  <img src="./img/avatar_02.svg" alt="" />
                </div>
                <div class="li-ranking-info d-flex flex-column">
                  <span class="fs-5 font-din-bold text-light ">Jéssica Fler</span>
                  <span class="fs-3 font-din-bold text-light ">10 pnts</span>
                </div>
              </div>
            </li>

            

          </ul>
        </div>
        </section>

      </section>
    </main>
  )
}

export default Ranking
