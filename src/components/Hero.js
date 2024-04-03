import React from 'react'

const Hero = () => {
  return (
    <>
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 class="text-5xl font-bold">Mis proyectos</h1>
                <p class="py-6">Lista de proyetos creados.</p>
                <button class="btn btn-primary">EXPLORAR</button>
                </div>
            </div>
        </div>
    </>
  )
}
export default Hero