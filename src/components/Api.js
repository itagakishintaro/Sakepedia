import React from 'react'
// css
import classes from '../../public/stylesheets/scss/sheets.scss'

const Api = () => {
  return(
    <div>
      <h2>銘柄一覧（GET）</h2>
      <pre>/api/sakes</pre>
      <p>
        登録されている銘柄データとレビューデータを取得します（100件が上限）。<br />
        画像は取得できません。別途画像のAPIで取得してください。
      </p>
      <table className={classes.table}>
        <tr className={classes.tr}><th className={classes.th}>クエリー<br />パラメーター</th><th className={classes.th}>説明</th></tr>
        <tr className={classes.tr}><td className={classes.td}>prefecture</td><td className={classes.td}>都道府県名（例：山形県）</td></tr>
        <tr className={classes.tr}><td className={classes.td}>brewery</td><td className={classes.td}>蔵元（例：高木酒造）</td></tr>
        <tr className={classes.tr}><td className={classes.td}>brand</td><td className={classes.td}>銘柄（例：十四代）</td></tr>
      </table>
      <div>サンプル</div>
      <pre>/api/sakes?prefecture=山形県&brewery=高木酒造&brand=十四代</pre>
      <p>※クエリーパラメーターはURIエンコードしてください。</p>

      <h2>銘柄（GET）</h2>
      <pre>/api/sakes/:id</pre>
      <p>
        指定したidに該当する銘柄データとレビューデータを取得します。<br />
        idは銘柄一覧の"_id"か詳細画面のURLから確認してください。
      </p>
      <div>サンプル</div>
      <pre>/api/sakes/58119e581e09280011814c87</pre>

      <h2>画像（GET）</h2>
      <pre>/api/sakes/:id/image</pre>
      <p>
        指定したidに該当する銘柄の画像データを取得します。<br />
        idは銘柄一覧の"_id"か詳細画面のURLから確認してください。
      </p>
      <div>サンプル</div>
      <pre>/api/sakes/58119e581e09280011814c87/image</pre>

      <h2>蔵元（GET）</h2>
      <pre>/api/breweries</pre>
      <p>
        登録されている蔵元データを取得します。
      </p>
      <p>管理者確認前の最新データはGoogle Spread Sheetsから取得できます。</p>
      <a target="_blank"  href="https://docs.google.com/spreadsheets/d/1ko_2HlIC-KtAp9aMJlrDD4MiIv81DKouhdPdo3BQDGY/edit#gid=0">管理者確認前の最新データ</a>

      <h2>用語集（GET）</h2>
      <pre>/api/glossary</pre>
      <p>
        登録されている用語集データを取得します。
      </p>
      <p>管理者確認前の最新データはGoogle Spread Sheetsから取得できます。</p>
      <a target="_blank" href="https://docs.google.com/spreadsheets/d/13xAtWg2neS0TF-8vY2BluIvd5Bbnbx5b0OUsCnnOg4k/edit#gid=0">管理者確認前の最新データ</a>

      <h2>酒屋リスト（GET）</h2>
      <pre>/api/shoplist</pre>
      <p>
        登録されている酒屋リストデータを取得します。
      </p>
      <p>管理者確認前の最新データはGoogle Spread Sheetsから取得できます。</p>
      <a target="_blank" href="https://docs.google.com/spreadsheets/d/1PwS4aOTBwdERwZWTMQ1VUWa1-lzE7SPLLaQ1nX4BOAc/edit#gid=0">管理者確認前の最新データ</a>
    </div>
  )
}

export default Api
