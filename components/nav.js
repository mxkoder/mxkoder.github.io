class Nav extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <style>
        nav {
          position: fixed;
          top: 0px;
          width: 100vw;
          background-color: var(--main-colour);
          font-size: 1.4em;
          margin: 0;
          padding: 0.3rem;
          list-style:none;
        }
        
        nav > ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          width: 60vw;
          margin-left: 18vw;
          text-align: center;
        }
        
        nav > ul > li {
          display: block;
          float: left;
          width: 10vw;
          text-align: center;
          position: relative;
        }
        
        nav > ul > li >a {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
        }

        /* Link styling */
        a:link {
          color: var(--accent-colour);
          text-decoration: none;
        }

        a:visited {
          color: var(--accent-colour);
        }

        a:hover {
          text-decoration: underline;
        }


        /*media query --> full witdh nav bar for smaller screens*/
        @media only screen and (max-width: 992px) {
          nav > ul {
            width: 90vw;
            margin-left: 5vw;
            justify-content: space-evenly;
            gap: 0.8rem;
            text-align: center;
            font-size: 0.8em;
            line-height: 0.8;
          }

          nav > ul > li {
            display: block;
            float: left;
            width: fit-content;
            text-align: left;
            position: relative;
          }
        }

        /*media query --> nav bar for extra large screens*/
        @media only screen and (min-width: 1200px) {
          nav > ul {
            width: 50vw;
            margin-left: 24vw;
            justify-content: space-evenly;
            text-align: center;
          }
        }

        </style>

        <nav id="site">
          <ul id="nav-list">
            <li><a href="/#about" class="nav-link">about</a></li>
            <li><a href="/writing" class="nav-link">writing</a></li>
            <li><a href="/projects" class="nav-link">projects</a></li>
            <li><a href="/speaking" class="nav-link">speaking</a></li>
          </ul> 
        </nav>
        `;
    }
  }
  
customElements.define('nav-component', Nav);