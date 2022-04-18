class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <style>
/*------Footer section------*/
footer {
  background-color: var(--main-colour);
  margin-top: -0.5em;
  padding: 0.3em;
  position: fixed; 
  bottom: 0;
  width: 100vw;
}

#social-media-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding-top: 0;
}

#copyright {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 0.5rem;
}

/* social media connect icons*/
.fa {
  font-size: 1em;
  width: 40px;
  text-align: center;
  text-decoration: none;
  color: var(--accent-colour);
}

#link_to_home_page {
  margin-left: 10px;
}

/* hover effect for social media connect icons */
.fa:hover {
  opacity: 0.6;
}


</style>

    <footer id="footer"> 
      <section id="social-media-links">
        <a href="https://twitter.com/mx_coder_" class="fa fa-twitter" target="_blank" aria-label="twitter_link" id="twitter_link"></a>
        <a href="https://www.linkedin.com/in/agnes-beviz/" class="fa fa-linkedin" target="_blank" aria-label="linkedin_link" id="linkedin_link"></a>
        <a href="https://github.com/mxkoder" class="fa fa-github" target="_blank" aria-label="github_link" id="github_link"></a>
        <a href="mailto:abeviz.codes@gmail.com" id="email_link" aria-label="mailto:_link" ><img alt="black email icon" src="/images/email-icon.png" width=30px height=30px>
        <a href="https://www.agnesbeviz.co.uk/" id="link_to_home_page"><img alt="Cartoonised portrait" src="/images/portrait-ab-stylized.png" width=30px height=30px id="stylised_portrait, links to homepage"></a>
        </section>
      <p id="copyright">Copyright &#169 2022 Agnes Beviz</p>
        
    </footer>
`;
    }
  }
  
customElements.define('footer-component', Footer);