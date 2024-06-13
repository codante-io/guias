import { Footer } from '@/components/Footer';
import Logo from './Logo';
import { Resources } from './resources';

export default function Home() {
  return (
    <>
      <main className="relative flex h-full flex-col pt-6 px-4  sm:px-6 lg:px-8 container mx-auto">
        <Logo className="w-[200px] mx-auto md:ml-0" />
        <div className="text-center md:text-left">
          <h1 className="text-3xl text-gray-600 font-lexend mt-10 md:mt-32">
            Guias do Codante
          </h1>
          <p className="text-gray-500 mt-2">
            Aqui você encontra todos os guias utilizados pelos nossos workshops!
            Acesse o <a className='text-blue-500' href="https://codante.io">site do Codante</a>, ou se quiser contribuir, acesse o nosso
            repositório no{' '}
            <a
              className="text-blue-500"
              href="https://github.com/codante-io/guias"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <Resources />
      </main>
      <div className=" px-4  sm:px-6 lg:px-8 border-t border-zinc-900/5 pt-10 container mx-auto">
        <Footer />
      </div>
    </>
  );
}
