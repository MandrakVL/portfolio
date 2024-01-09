import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSessao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="segundario">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores id
      neque consequatur consectetur modi. Hic, itaque eius similique soluta
      cumque, eos velit debitis porro in obcaecati nesciunt quam id ea.
    </Paragrafo>
    <GithubSessao>
      <img src="https://github-readme-stats.vercel.app/api?username=MandrakVL&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MandrakVL&layout=compact&langs_count=7&theme=dracula" />
    </GithubSessao>
  </section>
)

export default Sobre
