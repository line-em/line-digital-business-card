import React from "react";
import {
	GithubLogo,
	TwitterLogo,
	InstagramLogo,
	LinkedinLogo,
	Envelope,
	Books,
	MoonStars,
	ChatsCircle,
	Sun,
	IconContext
} from "phosphor-react";

function App() {
	return (
		<IconContext.Provider
			value={{
				size: 24,
				color: "var(--orange)",
				weight: "duotone"
			}}
		>
			<div className="theme-switch buttons">
				<a href="x" className="button button-secondary">
					<Sun />
				</a>
				<a href="x" className="button button-secondary">
					<MoonStars />
				</a>
			</div>

			<main className="wrapper wrapper-style">
				<div className="profile-image"></div>

				<div className="center">
					<h1>Aline Emily</h1>
					<h2>Front-end Developer</h2>

					<a href="#">www.github.io/alineemily</a>

					<div className="buttons icon-separation margin-all">
						<IconContext.Provider
							value={{
								size: 20,
								color: "var(--white)",
								weight: "duotone"
							}}
						>
							<a href="mailto:" className="button button-primary margin-all">
								<Envelope />
								E-mail
							</a>
							<a href="mailto:" className="button button-primary margin-all">
								<LinkedinLogo />
								Linkedin
							</a>
						</IconContext.Provider>
					</div>
				</div>

				<div className="title">
					<ChatsCircle />
					<h3>About</h3>
				</div>
				<p className="text-wrapper">
					I'm a <strong>front-end developer</strong> currently based on Portugal, building
					web applications using Javascript, React, HTML and CSS. I come from a creative
					background - working with art and <strong>graphic design.</strong> I'm looking
					for a career change - which is definitely daunting, but exciting! I'm eager to
					learn more, <strong>I'm always looking for more knowledge.</strong>
				</p>
				<div className="title">
					<Books />
					<h3>Interests</h3>
				</div>

				<p className="text-wrapper">
					I love <strong>reading</strong> - specially fantasy books! - and I have a deep
					love for Jane Austen and Agatha Cristie. I also enjoy a good cup of tea,
					painting, gaming, and snuggling with my precious kitten, <strong>Leia</strong>{" "}
					(who is definitely a rebel princess!). I love cozy things. 🥰
				</p>
			</main>

			<div className="social-links buttons">
				<a
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className="button button-secondary"
				>
					<GithubLogo />
				</a>
				<a
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className="button button-secondary"
				>
					<TwitterLogo />
				</a>
				<a
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className="button button-secondary"
				>
					<InstagramLogo />
				</a>
			</div>
		</IconContext.Provider>
	);
}

export default App;
