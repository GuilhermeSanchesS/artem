import React from 'react';
import PageDefault from '../../components/PageDefault';
import './index.css';

export default function NotFound() {
  return (
    <PageDefault>
      <div className="notFound">
      <div style="width:100%;height:0;padding-bottom:75%;position:relative;">
        <iframe src="https://giphy.com/embed/M52wyuahvQfJK" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <p>
          <a href="https://giphy.com/gifs/art-surrealgifs-M52wyuahvQfJK">via GIPHY</a>
        </p>
        <h1>Página não encontrada! =( </h1>
      </div>
    </PageDefault>
  );
}
