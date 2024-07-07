import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,

} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";
import { Colors } from "../../theme/color";
import themeContext from "../../theme/themeContex";
import style from "../../theme/style";
import { useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';
import { t } from "i18next";
import { useStore } from "../../store/store";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Terms() {
  const { changeStore, store } = useStore();
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const currentUser = store.currentUser;
  const [htmlContent, setHtmlContent] = useState('');

  const performerhtmlContent = `
  <html>
    <head>
      <style>
        body {
          font-size: 30px;
          color: ${theme.txt};
        }
      </style>
    </head>
    <body>
      <h1>Classical LIVE利用規約</h1>
      <p>以下「本規約」といいます）は、クラシック音楽のライブ配信アプリケーション「Classical LIVE」（以下「本アプリ」といいます）を企画運営する者（以下「運営者」といいます）が、本アプリに関する利用条件及び運営者とユーザーとの間の権利義務関係を定めるものです。</p>
      <br/>

      <h2>第１条（本規約）</h2>
      <ul>
        <li>運営者が本アプリでユーザーに提示する利用方法、FAQ、ガイドライン等（以下「利用案内」といいます）は、本規約の一部を構成するものとし、本規約という用語には利用案内を含むものとします。</li>
        <li>本規約で使用する主な用語の定義は、以下のとおりとします。</li>
        <li>「ユーザー」：ユーザー登録を行った個人をいい、ユーザーとなることを希望する個人を「ユーザー登録希望者」といいます。</li>
        <li>「アカウント」：運営者がユーザーに付与する本アプリの利用資格をいい、ユーザーが本アプリに登録した自らの情報を「ユーザー情報」といいます。</li>
        <li>「対象機器」：本アプリを使用することができる環境（OS、バージョン、空き容量、使用条件等の一切をいいます）を備えた端末機器をいいます。</li>
        <li>「ライブ演奏」：本アプリにおいて、楽器や声楽等によって、オンライン画面を通じた楽曲の生演奏を行うことをいい、ライブ演奏を行うことに関する企画を「ライブ企画」といいます。</li>
        <li>「演奏ユーザー」：ライブ企画を立案し、販売するユーザーをいいます。</li>
        <li>「演奏楽曲」：演奏ユーザーがライブ演奏を行う対象の楽曲をいい、演奏ユーザーがライブで行う演奏を「ライブ演奏」といいます。</li>
        <li>「ライブ視聴権」：演奏ユーザーによるライブ演奏を視聴する権利をいいます。</li>
        <li>「視聴ユーザー」：演奏ユーザーからライブ視聴権を購入するユーザーをいいます。</li>
        <li>「ライブ視聴権購入契約」：演奏ユーザーと視聴ユーザーとの間に成立するライブ視聴権の購入に関する契約をいいます。</li>
        <li>「ライブ視聴権購入代金」：視聴ユーザーが、ライブ演奏を視聴する対価として、ライブ視聴権を購入するために演奏ユーザーに支払わなければならない代金をいいます。ライブ視聴権購入代金の価格は、演奏ユーザーが定めるものとします。</li>
        <li>「チップ」：視聴ユーザーが、ライブ演奏を視聴する対価として、ライブ視聴権購入代金とは別に、任意で演奏ユーザーに支払う代金をいいます。チップの価格は、あらかじめ運営者がチップに対応する電子アイテム（以下「チップアイテム」といいます）ごとに定めた価格体系の中から、視聴ユーザーが選択できるものとします。</li>
        <li>「アプリ使用料」：演奏ユーザーが、ライブ企画を掲示し、ライブ視聴権を販売のうえ、ライブ演奏を行い、代金を受領する等の一連の業務について、本アプリを使用することで簡便かつ効率的に実現できることの対価として、演奏ユーザーが運営者に対して支払う使用料をいいます。アプリ使用料は、ライブ視聴権購入代金とチップの合算額に、運営者所定の料率を乗じて算出した金額に消費税を加算した額とします。</li>
        <li>「振込対象額」：ライブ視聴権購入代金からアプリ使用料を差し引いた金額をいいます。</li>
        <li>「コイン」：視聴ユーザーがライブ視聴権購入代金又はチップの支払い手段として使用し、又は、演奏ユーザーが振込対象額の管理を行うことを目的として運営者が発行する、本サービスにおいてのみ利用可能な電子的価値をいいます。また、視聴ユーザーが、コインを購入するために運営者に支払う代金を「コイン購入代金」といいます。</li>
        <li>「管理画面」：ユーザーが各種情報の確認、変更、抹消等を行うことができる画面をいいます。</li>
        <li>「指定決済事業者」：運営者が本アプリにおける決済、精算、支払等の業務を委託する事業者をいいます。</li>
        <li>「アプリマーケット事業者」：運営者が本アプリを提供するために登録するアプリマーケットの運営事業者をいいます。</li>
        <li>「プライバシーポリシー」：運営者が定める本アプリにおける個人情報の取扱い方針をいいます。</li>
      </ul>
      <br/>

      <h2>第２条（本アプリの利用）</h2>
      <ul>
        <li>ユーザーは、アプリマーケット事業者において、本アプリのダウンロードを行ったうえで、ユーザー自身の対象機器にインストールし、本規約及びプライバシーポリシーをあらかじめ承認のうえ所定のユーザー登録を行うことで、本アプリを利用することができるものとします。</li>
        <li>未成年のユーザーは、演奏ユーザーとして、前項のユーザー登録を行うことはできないものとします。</li>
        <li>本規約に定めたライブ視聴権購入代金、アプリ使用料、振込対象額等の決済、精算、支払等については、全て指定決済事業者のアカウントを通じて行うものとします。このため、ユーザーは、本アプリの利用にあたって、指定決済事業者への登録及びアカウントの取得に必要な手続きを行うものとします。</li>
        <li>ユーザーは、本アプリをダウンロード又は利用する際に発生する対象機器又は通信環境の準備等については、自らの責任と費用で行うものとし、かかる準備等へのサポートについては、運営者は行わないものとします。</li>
        <li>運営者は、いつでも新しい機能を本アプリに実装し、又は既存の機能の改善、変更、削除等を行うことができるものとします。</li>
      </ul>
      <br/>

      <h2>第３条（ログイン情報管理）</h2>
      <ul>
        <li>ユーザーは、本アプリのアカウントへのログインに必要な情報（以下「ログイン情報」といいます）を厳格に管理するものとします。</li>
        <li>ユーザーは、ログイン情報の第三者（知人や家族を含みます）への貸与、譲渡、名義変更、その他の処分を行ってはならないものとします。</li>
        <li>ログイン情報の第三者利用により発生した損害はユーザーが負担するものとし、運営者は、かかるユーザーの損害から一切免責されるものとします。</li>
      </ul>
      <br/>

      <h2>第４条（ユーザー情報の変更）</h2>
      <p>ユーザーは、ユーザー情報に変更がある場合、速やかに管理画面から変更手続きを行うものとします。</p>
      <h2>第５条（退会）</h2>
      <ul>
        <li>ユーザーは、本アプリからの退会を希望する場合、管理画面から退会手続きを行うものとします。ただし、退会手続き実施時点でユーザーの運営者に対する債務がある場合、当該債務の弁済が終了するまで、退会手続きは完了しないものとします。</li>
        <li>退会にあたってのコインの取扱いについては、第７条第６項に従うものとします。</li>
      </ul>
      <br/>
      
      <h2>第６条（ライブ企画等の登録）</h2>
      <ul>
        <li>ライブ企画の内容は、演奏楽曲、使用する楽器等、ライブ演奏の日時、その他運営者の定める必須の事項を含まなくてはならないものとします。</li>
        <li>演奏ユーザーは、本アプリ所定の方法に従い、演奏ユーザーのプロフィール情報（以下「プロフィール情報」といいます）及びライブ企画を登録するものとします。</li>
        <li>ライブ企画における演奏楽曲の選曲内容に限定はありませんが、演奏ユーザーは、ライブ企画を登録するにあたっては、選曲、演奏方法、使用楽器等について、本アプリのテーマであるクラシック音楽分野の範囲で設定するものとします。</li>
        <li>前項に関わらず、演奏のユーザーは、ゲーム音楽やカラオケ音楽のほか、楽曲の著作権者が明示的に配信を禁止する楽曲について、ライブ企画の演奏楽曲にすることはできません。</li>
        <li>演奏ユーザーは、ライブ企画において、次の各号に該当する内容を含めてはならないものとします。
        <li>視聴ユーザーが優良誤認又は有利誤認をするおそれのある内容</li>
        <li>演奏ユーザーに直接連絡できる手段を掲載する内容</li>
        <li>自らの経歴、所属、技術等について事実を超えた大げさな説明をする内容</li>
        <li>虚偽の表示を含む内容</li>
        <li>その他運営者が不適切と判断する内容</li>
      </ul>
      <br/>

      <h2>第７条（コインの付与）</h2>
      <ul>
        <li>本アプリにおけるライブ視聴権購入代金の決済及び振込対象額の管理については、全て運営者がユーザーに付与するコインによって行うものとします。</li>
        <li>運営者は、コインと現金の交換比率を定めたうえで本アプリに公表するものとし、ユーザーは常に最新の交換比率に従うものとします。</li>
        <li>演奏ユーザーは、ライブ視聴権購入契約の成立によって、運営者から振込対象相当額のコインの付与を受けるものとし、当該振込対象額を受け取ることができるものとします。</li>
        <li>コインの有効期限は、常にユーザーに付与されたコインの全残高について設定されるものとし、前項の最終コイン付与日から179日とします。</li>
        <li>運営者は、ユーザーに対してあらかじめ合理的な期間を置いて告知することで、コインの有効期限を変更することができるものとします。</li>
        <li>ユーザーが本アプリの退会手続きを行った場合、第15条の定めに関わらず、当該退会手続き完了日以降直近の振込日をもって、コイン相当額から運営者所定の払い戻し手数料を差し引いた額が払い戻されるものとします。</li>
        <li>運営者がユーザーに対してコイン相当額の振込対象額を振り込むにあたって、ユーザーが振込口座情報を登録していなかった場合又は登録した振込口座情報が誤っていた場合、当該コインは失効するものとします。ただし、失効後、当該ユーザーが、振込口座を指定したうえで運営者に当該コインに関する請求を行った場合はこの限りではありません。</li>
      </ul>
      <br/>

      <h2>第８条（演奏ユーザーによるキャンセル）</h2>
      <ul>
        <li>演奏ユーザーは、原則として、ライブ視聴権購入契約をキャンセルすることはできないものとします。ただし、以下のいずれかに該当した場合、例外的にキャンセルをすることができるものとします。</li>
        <li>視聴ユーザーと演奏ユーザーとの間で、キャンセルに関する合意を行い、かつライブ予定日の前日までに演奏ユーザーが本アプリ上にキャンセル登録を行った場合</li>
        <li>演奏ユーザーに病気や怪我等のやむを得ない状況が生じた場合</li>
        <li>演奏ユーザーが代替としての新たなライブ企画を本アプリに登録した場合</li>
        <li>キャンセルが成立した場合、ライブ視聴権購入代金に相当するコインは、視聴ユーザーに返還されるものとします。</li>
      </ul>
      <br/>
      
      <h2>第９条（ライブ演奏の実施）</h2>
      <ul>
        <li>演奏ユーザーは、ライブ視聴権購入契約成立後、ライブ企画で定めた事項に従い、ライブ演奏を実施するものとします。</li>
        <li>前項に関わらず、ライブ企画で定めた開始時刻から15分を経過しても視聴ユーザーが当該ライブの視聴を開始しなかった場合、当該ライブ企画の演奏ユーザーは、ライブ演奏を行ったとみなされるものとします。</li>
        <li>演奏ユーザーは、ライブ演奏をした結果、通信事業者に支払うべき全ての通信料について、自らの責任で負担するものとします。</li>
        <li>演奏ユーザーは、防音設備等を踏まえた演奏場所を自己の責任で確保のうえライブ演奏を行うものとし、運営者は、演奏者ユーザーと近隣者等との間で発生したトラブルについて、いかなる責任も負わないものとします。</li>
      </ul>
      <br/>
      <h2>第10条（チップ）</h2>
      <p>演奏ユーザーは、原則として、ライブ視聴権購入代金に基づいてライブ演奏を行うものとし、視聴ユーザーに対し、明示的又は黙示的であるかを問わず、チップを求める言動を行ってはならないものとします。</p>
      <br/>
      <h2>第11条（演奏楽曲の著作権と報告等）</h2>
      <ul>
          <li>演奏楽曲が一般社団法人日本音楽著作権協会（以下「JASRAC」といいます）に登録された楽曲（以下「JASRAC登録楽曲」といいます）である場合、当該楽曲の著作権については、運営者とJASRACとの包括的契約に基づき、JASRACから演奏ユーザーに使用許諾されるものとし、当該使用許諾の対価については、アプリ使用料に含まれるものとします。</li>
          <li>演奏ユーザーは、演奏楽曲がJASRAC登録楽曲であるか否かについて自らの責任で確認し、JASRAC登録楽曲のライブ演奏を行った場合、本アプリの報告機能によって、速やかに運営者所定の報告を行うものとします。</li>
          <li>第１項及び第２項は、JASRAC登録楽曲以外の楽曲には適用となりません。このため、演奏ユーザーは、当該楽曲については、当該楽曲の著作権に関する正当な権利者の許諾がない限り、ライブ企画の内容としてはならないものとします。</li>
          <li>演奏ユーザーは、ライブ企画においてJASRACが管理する外国曲を含むサンプル動画を配信する場合、JASRAC所定の「ビデオグラム録音に係る手続き」を行うものとし、JASRAC又は音楽出版社等に対し、JASRAC又は音楽出版社等が指定する使用料を支払うのものとします。なお、「ビデオグラム録音に係る手続き」における確認、申込み、支払等について、本アプリではサポートは行っておらず、本項を定めること以外に運営者が関与することはありませんので、演奏ユーザーは、自らの責任で当該手続きを行うものとします。</li>
      </ul>
      <br/>
  
      <h2>第12条（ライブ演奏の著作権）</h2>
      <ul>
          <li>演奏ユーザーは、運営者に対し、本サイトの運営のために、運営者がライブ演奏を複製、翻案、自動公衆送信及び送信可能化をするほか、地域非限定で必要な使用をできる権利ついて、無償かつ無期限に許諾するものとします。また、演奏ユーザーは、運営者に対し、ライブ演奏に関する著作者人格権を行使しないことに同意するものとします。</li>
          <li>ライブ演奏の著作権に基づく使用権は、ライブ視聴権購入契約をもって当然に演奏ユーザーから視聴ユーザーに全面的に許諾されることはなく、当該使用許諾は、あくまでも演奏ユーザーの意思表示に基づくものとします。このため、演奏ユーザーが明示的な使用許諾を行わない限り、視聴ユーザーは当該ライブ視聴権について、転売やさらなる二次的創作のための使用を行うことはできないものとします。</li>
      </ul>
      <br/>
  
      <h2>第13条（ライブ演奏の録音と録画の禁止）</h2>
      <p>視聴ユーザーへのライブ演奏の録音及び録画については、原則として禁止されておりますが、演奏ユーザーが視聴ユーザーからの希望を受け、明示的に許可した場合はこの限りではありません。</p>
      <br/>
      <h2>第14条（アプリ使用料）</h2>
      <ul>
          <li>アプリ使用料における運営者所定の料率については、常に、運営者が本アプリ上に掲載した最新の料率が適用されるものとし、演奏ユーザーは、当該最新の料率が適用されることについて、異議なく承諾するものとします。</li>
          <li>アプリ使用料は、視聴ユーザーがライブ視聴権を購入することによって、発生するものとします。</li>
          <li>演奏ユーザーは、運営者に対し、指定決済事業者を通じて、アプリ使用料を支払うものとします。アプリ使用料の支払方法は、第15条に従うものとします。</li>
          <li>運営者は、運営者による債務不履行又は故意若しくは過失による場合を除き、一度収受したアプリ使用料について、演奏ユーザーに返還する義務を負わないものとします。</li>
      </ul>
      <br/>
      <h2>第15条（収納代行）</h2>
      <ul>
          <li>視聴ユーザーから演奏ユーザーへのライブ視聴権購入代金（本条においてコインに換価されたものをいいます）の支払いは、運営者が演奏ユーザーに代わり当該ライブ視聴権購入代金を受領し、それを運営者が演奏ユーザーに引渡すことにより行われるものとし、運営者がライブ視聴権購入代金を受領した時点で、視聴ユーザーから演奏ユーザーへのライブ視聴権購入代金の支払いは完了したものとします。</li>
          <li>演奏ユーザーは、運営者（以下本条において指定決済事業者を含みます）に対し、ライブ視聴権購入代金を代理受領する権限を付与するものとします。</li>
          <li>演奏ユーザーは、振込対象額が運営者の設定した下限額を超える場合に限り、運営者所定の方法で振込申請をできるものとし、この場合の振込日は、振込申請日から５営業日後とします。</li>
          <li>運営者は、演奏ユーザーからの振込申請に従い、ライブ視聴権購入代金について、運営者が代理受領した金銭の引き渡しとして、演奏ユーザーの指定口座（以下「指定口座」といいます）に振り込むものとします。この場合において、運営者は、アプリ使用料をライブ視聴権購入代金から相殺し、振込対象額とするものとします。また、振込にあたっては、振込対象額から、運営者所定の振込手数料が差し引かれるものとします。</li>
          <li>コインの有効期限の超過等によりコインが失効した場合、当該失効日以降直近の振込日をもって、コイン相当額から運営者所定の手数料を差し引いた額が払い戻されるものとします。</li>
          <li>指定口座に誤りがあった場合、運営者は、組戻し手数料その他の費用を前項の精算金額から減算できるものとします。</li>
      </ul>
      <br/>
  
      <h2>第16条（禁止行為）</h2>
      <ul>
          <li>演奏ユーザーは、ライブ演奏を含む全ての配信において、誹謗中傷を含む内容、相手を不快にする内容、アダルト系の内容、第三者の著作権等を侵害する内容、他サービスへの誘導に関する内容、ライブ視聴権件購入代金以外の報酬に関する内容、違法性の懸念のある内容、その他運営者が不適切と判断する内容を配信してはならないものとします。</li>
          <li>ユーザーは、本アプリの利用にあたり、以下の各号のいずれかに該当する行為をしてはならないものとします。</li>
          <li>法令又は公序良俗に反する行為</li>
          <li>同一ユーザーが複数のアカウントを登録する行為</li>
          <li>ユーザー本人以外のアカウントを利用する行為</li>
          <li>個人情報その他のプライベート情報を開示する行為</li>
          <li>ライブ演奏の時間内で長時間離席する行為</li>
          <li>虚偽又は事実と異なる情報を登録する行為</li>
          <li>特定の個人、法人、団体を誹謗中傷する行為</li>
          <li>政治的又は宗教的な勧誘を伴う行為</li>
          <li>本アプリと競合するサービス等の宣伝等を行う行為</li>
          <li>本アプリ外での直接取引を行おうとする一切の行為</li>
          <li>スパム行為及びこれらに類する行為</li>
          <li>本アプリ内で不当に情報を操作する行為</li>
          <li>不正アクセスや改ざん、ウイルスや有害プログラム等による攻撃行為</li>
          <li>合理性のない苦情申し立て、受取拒否、不当要求等を運営者に行う行為</li>
          <li>自動応答のための装置、ソフトウェア、アルゴリズム等を利用する行為</li>
          <li>異性交際を目的として本アプリを利用する行為</li>
          <li>本アプリの運営及び運営者の業務を妨害する行為</li>
          <li>その他運営者が不適切と判断する行為</li>
      </ul>
      <br/>
      <h2>第15条（収納代行）</h2>
      <ul>
          <li>視聴ユーザーから演奏ユーザーへのライブ視聴権購入代金（本条においてコインに換価されたものをいいます）の支払いは、運営者が演奏ユーザーに代わり当該ライブ視聴権購入代金を受領し、それを運営者が演奏ユーザーに引渡すことにより行われるものとし、運営者がライブ視聴権購入代金を受領した時点で、視聴ユーザーから演奏ユーザーへのライブ視聴権購入代金の支払いは完了したものとします。</li>
          <li>演奏ユーザーは、運営者（以下本条において指定決済事業者を含みます）に対し、ライブ視聴権購入代金を代理受領する権限を付与するものとします。</li>
          <li>演奏ユーザーは、振込対象額が運営者の設定した下限額を超える場合に限り、運営者所定の方法で振込申請をできるものとし、この場合の振込日は、振込申請日から５営業日後とします。</li>
          <li>運営者は、演奏ユーザーからの振込申請に従い、ライブ視聴権購入代金について、運営者が代理受領した金銭の引き渡しとして、演奏ユーザーの指定口座（以下「指定口座」といいます）に振り込むものとします。この場合において、運営者は、アプリ使用料をライブ視聴権購入代金から相殺し、振込対象額とするものとします。また、振込にあたっては、振込対象額から、運営者所定の振込手数料が差し引かれるものとします。</li>
          <li>コインの有効期限の超過等によりコインが失効した場合、当該失効日以降直近の振込日をもって、コイン相当額から運営者所定の手数料を差し引いた額が払い戻されるものとします。</li>
          <li>指定口座に誤りがあった場合、運営者は、組戻し手数料その他の費用を前項の精算金額から減算できるものとします。</li>
      </ul>
      <br/>

      <h2>第16条（禁止行為）</h2>
      <ul>
          <li>演奏ユーザーは、ライブ演奏を含む全ての配信において、誹謗中傷を含む内容、相手を不快にする内容、アダルト系の内容、第三者の著作権等を侵害する内容、他サービスへの誘導に関する内容、ライブ視聴権件購入代金以外の報酬に関する内容、違法性の懸念のある内容、その他運営者が不適切と判断する内容を配信してはならないものとします。</li>
          <li>ユーザーは、本アプリの利用にあたり、以下の各号のいずれかに該当する行為をしてはならないものとします。</li>
          <li>法令又は公序良俗に反する行為</li>
          <li>同一ユーザーが複数のアカウントを登録する行為</li>
          <li>ユーザー本人以外のアカウントを利用する行為</li>
          <li>個人情報その他のプライベート情報を開示する行為</li>
          <li>ライブ演奏の時間内で長時間離席する行為</li>
          <li>虚偽又は事実と異なる情報を登録する行為</li>
          <li>特定の個人、法人、団体を誹謗中傷する行為</li>
          <li>政治的又は宗教的な勧誘を伴う行為</li>
          <li>本アプリと競合するサービス等の宣伝等を行う行為</li>
          <li>本アプリ外での直接取引を行おうとする一切の行為</li>
          <li>スパム行為及びこれらに類する行為</li>
          <li>本アプリ内で不当に情報を操作する行為</li>
          <li>不正アクセスや改ざん、ウイルスや有害プログラム等による攻撃行為</li>
          <li>合理性のない苦情申し立て、受取拒否、不当要求等を運営者に行う行為</li>
          <li>自動応答のための装置、ソフトウェア、アルゴリズム等を利用する行為</li>
          <li>異性交際を目的として本アプリを利用する行為</li>
          <li>本アプリの運営及び運営者の業務を妨害する行為</li>
          <li>その他運営者が不適切と判断する行為</li>
      </ul>
      <br/>
      <h2>第17条（アカウントの停止、凍結、抹消）</h2>
      <p>運営者は、ユーザーが以下の各号のいずれかの事由に該当すると判断した場合には、当該ユーザーに通知することなく、当該ユーザーのアカウントを停止、凍結、抹消を行うことができるものとします。</p>
      <ul>
          <li>本規約に違反した場合又はそのおそれがある場合</li>
          <li>ユーザーが本アプリに登録した情報に虚偽が判明した場合</li>
          <li>過去に本条の措置を受けた事実が判明した場合</li>
          <li>最終ログイン時から、運営者が定めて本アプリ上に掲載した期間を経過した場合</li>
          <li>支払停止、支払不能、破産、再生、不渡り、差押、租税公課滞納、その他により信用不安が生じた場合</li>
          <li>死去が判明した場合</li>
          <li>その他運営者が判断した場合</li>
      </ul>
      <br/>

      <h2>第18条(本アプリの中断、停止等)</h2>
      <ul>
          <li>運営者は、以下の各号のいずれかに該当する場合、ユーザーへの予告及び同意なく、本アプリの全部又は一部の提供を中断することができるものとします。なお、以下の事項には、指定決済事業者のシステムに生じたものを含みます。</li>
          <li>緊急でコンピュータシステムの点検、保守を行う場合</li>
          <li>停電、サーバー故障等が発生した場合</li>
          <li>コンピュータ、通信回線等に不良がある場合</li>
          <li>地震、落雷、火災等の不可抗力による場合</li>
          <li>その他運営者が必要と判断した場合</li>
          <li>運営者は、前項によってユーザーに生じた損害について、いかなる責任も負わないものとします。</li>
      </ul>
      <br/>

      <h2>第19条（個人情報の取扱い）</h2>
      <ul>
          <li>運営者は、ユーザー情報及びプロフィール情報について、プライバシーポリシーに従って取り扱うものとします。</li>
          <li>ユーザーは、本アプリを通じて知り得たユーザー情報その他の個人情報を厳重に管理し、第三者に開示又は漏洩してはならず、ライブ視聴権購入契約の目的以外で利用してはならないものとします。</li>
      </ul>
      <br/>

      <h2>第20条（権利義務の譲渡）</h2>
      <p>ユーザーは、本規約上の地位、権利、義務について、第三者に譲渡してはならないものとします。</p>
      <h2>第21条（情報の保存）</h2>
      <p>運営者は、本アプリのサーバー上に保存された一切の情報について、運営者所定の期間を超えて保存する義務を負わず、当該期間経過後にいつでも消去できるものとし、消去後の一切の責任を負いません。</p>
      <br/>

      <h2>第22条（非保証等）</h2>
      <p>運営者は、ユーザーに対し、以下いずれについても保証しないものとします。</p>
      <ul>
          <li>ライブ演奏の技術、レベル、表現性等</li>
          <li>ライブ映像及び音声の品質及び継続等</li>
          <li>ユーザー間のやり取りの適切性等</li>
          <li>ユーザーの人格、態度、振る舞い等の適切性等</li>
          <li>ユーザーの経歴等に関する真実性等</li>
          <li>ライブ企画の適法性、最新性、正確性、ユーザーの期待への合致性、ユーザーの目的への適合性等</li>
          <li>本アプリにシステム障害が一切生じないこと</li>
      </ul>
      <br/>

      <h2>第23条（免責）</h2>
      <ul>
          <li>運営者は、ユーザー間又はユーザーと第三者との間で生じた苦情、訴訟、賠償請求等に関して、いかなる責任も負わないものとします。</li>
          <li>運営者は、本アプリ外においてユーザー間で行われたやり取りから生じたあらゆる不具合について、いかなる責任も負わないものとします。</li>
          <li>運営者は、本アプリに貼られたURLからのリンク先の内容及び当該リンク先で生じたあらゆる不具合について、いかなる責任も負わないものとします。</li>
          <li>運営者は、ユーザーの通信回線やコンピュータなどの障害によって生じたあらゆる不具合について、いかなる責任も負わないものとします。</li>
          <li>本規約に定めた運営者を免責する規定は、運営者に故意又は重過失が存する場合には適用しないものとします。</li>
      </ul>
      <br/>

      <h2>第24条（反社会的勢力排除）</h2>
      <ul>
        <li>ユーザー又はユーザー登録希望者は、自らが暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋等社会運動標榜ゴロ又は特殊知能暴力団、その他これらに準ずる者(以下これらを「反社会的勢力」といいます）に該当しないこと、及び次の各号のいずれにも該当しないことを表明し、かつ将来にわたっても該当しないことを確約します。</li>
        <li>反社会的勢力が経営を支配していると認められる関係を有すること</li>
        <li>反社会的勢力が経営に実質的に関与していると認められる関係を有すること</li>
        <li>自己、自社若しくは第三者の不正の利益を図る目的又は第三者に損害を加える目的をもってするなど、不当に反社会的勢力を利用していると認められる関係を有すること</li>
        <li>反社会的勢力に資金等を提供し、又は便宜を供与するなどの関与をしていると認められる関係を有すること</li>
        <li>役員又は経営に実質的に関与している者が反社会的勢力と社会的に非難されるべき関係を有すること</li>
        <li>ユーザー又はユーザー登録希望者は、自ら又は第三者を利用して次の各号の一つにでも該当する行為を行わないことを確約します。</li>
        <li>暴力的な要求行為</li>
        <li>法的な責任を超えた不当な要求行為</li>
        <li>取引に関して、脅迫的な言辞又は暴力を用いる行為</li>
        <li>風説を流布し、偽計若しくは威力を用いて相手方の信用を毀損し、又は業務を妨害する行為</li>
      </ul>
      <br/>

      <h2>第25条（損害賠償）</h2>
      <ul>
          <li>ユーザーは、ユーザー又はユーザーの関係者が本規約に違反することによって運営者に損害を与えた場合、運営者に対し、その損害を賠償するものとします。</li>
          <li>運営者の故意又は重大な過失による場合を除き、運営者がユーザーに負う損害賠償の金額は、当該ユーザーが直接被った損害金額に限るものとします。</li>
      </ul>
      <br/>

      <h2>第26条（本規約の改訂）</h2>
      <p>運営者は、本規約を改訂する場合、民法第548条の4の定めに従うものとします。</p>
      <br/>

      <h2>第27条（連絡及び通知）</h2>
      <ul>
          <li>ユーザーと運営者の間の連絡及び通知は、運営者の定める方法に従うものとします。</li>
          <li>ユーザーが運営者に問合せを行う場合、本アプリ上の問い合わせフォームを使用するものとし、回答方法は運営者が指定するものとします。</li>
      </ul>
      <br/>

      <h2>第28条（本アプリの譲渡）</h2>
      <p>運営者は、本アプリの事業を第三者に譲渡（手段を問いません）をした場合には、当該事業譲渡に伴い、本規約に定めた運営者の地位、権利、義務、ユーザーの情報、店舗情報、演奏ユーザー情報、その他の情報を当該事業譲渡の譲受人に譲渡することができるものとし、ユーザーは、あらかじめ同意するものとします。</p>
      <br/>

      <h2>第29条（その他）</h2>
      <ul>
          <li>運営者は、本アプリの機能、デザイン、仕様について、運営者の判断により自由に更新することができるものとします。</li>
          <li>本規約のいずれかの条項又はその一部が無効又は執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効又は執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。</li>
          <li>本規約に基づく運営者とユーザーの合意は、運営者とユーザー間の事前の合意に優先します。</li>
      </ul>
      <br/>

      <h2>第30条 (準拠法及び管轄合意)</h2>
      <p>本規約は、日本法に基づき解釈されるものとします。ユーザーと運営者の間で生じた一切の紛争については、訴額に応じて、運営者の住所地を管轄する地方裁判所又は簡易裁判所を第一審の専属的合意管轄裁判所とします。</p>
      <br/>

    </body>
  </html>
`;
const customerhtmlContent = `
  <html>
    <head>
      <style>
        body {
          font-size: 30px;
          color: ${theme.txt};
        }
      </style>
    </head>
    <body>
      <h1>Classical LIVE利用規約</h1>
      <p>（以下「本規約」といいます）は、クラシック音楽のライブ配信アプリケーション「Classical LIVE」（以下「本アプリ」といいます）を企画運営する者（以下「運営者」といいます）が、本アプリに関する利用条件及び運営者とユーザーとの間の権利義務関係を定めるものです。</p>
      <h2>第１条（本規約）</h2>
        <ul>
          <li>運営者が本アプリでユーザーに提示する利用方法、FAQ、ガイドライン等（以下「利用案内」といいます）は、本規約の一部を構成するものとし、本規約という用語には利用案内を含むものとします。</li>
          <li>本規約で使用する主な用語の定義は、以下のとおりとします。</li>
          <li>「ユーザー」：ユーザー登録を行った個人をいい、ユーザーとなることを希望する個人を「ユーザー登録希望者」といいます。</li>
          <li>「アカウント」：運営者がユーザーに付与する本アプリの利用資格をいい、ユーザーが本アプリに登録した自らの情報を「ユーザー情報」といいます。</li>
          <li>「対象機器」：本アプリを使用することができる環境（OS、バージョン、空き容量、使用条件等の一切をいいます）を備えた端末機器をいいます。</li>
          <li>「ライブ演奏」：本アプリにおいて、楽器や声楽等によって、オンライン画面を通じた楽曲の生演奏を行うことをいい、ライブ演奏を行うことに関する企画を「ライブ企画」といいます。</li>
          <li>「演奏ユーザー」：ライブ企画を立案し、販売するユーザーをいいます。</li>
          <li>「演奏楽曲」：演奏ユーザーがライブ演奏を行う対象の楽曲をいい、演奏ユーザーがライブで行う演奏を「ライブ演奏」といいます。</li>
          <li>「ライブ視聴権」：演奏ユーザーによるライブ演奏を視聴する権利をいいます。</li>
          <li>「視聴ユーザー」：演奏ユーザーからライブ視聴権を購入するユーザーをいいます。</li>
          <li>「ライブ視聴権購入契約」：演奏ユーザーと視聴ユーザーとの間に成立するライブ視聴権の購入に関する契約をいいます。</li>
          <li>「ライブ視聴権購入代金」：視聴ユーザーが、ライブ演奏を視聴する対価として、ライブ視聴権を購入するために演奏ユーザーに支払わなければならない代金をいいます。ライブ視聴権購入代金の価格は、演奏ユーザーが定めるものとします。</li>
          <li>「チップ」：視聴ユーザーが、ライブ演奏を視聴する対価として、ライブ視聴権購入代金とは別に、任意で演奏ユーザーに支払う代金をいいます。チップの価格は、あらかじめ運営者がチップに対応する電子アイテム（以下「チップアイテム」といいます）ごとに定めた価格体系の中から、視聴ユーザーが選択できるものとします。</li>
          <li>「コイン」：視聴ユーザーがライブ視聴権購入代金又はチップの支払い手段として使用し、又は、演奏ユーザーが振込対象額の管理を行うことを目的として運営者が発行する、本サービスにおいてのみ利用可能な電子的価値をいいます。また、視聴ユーザーが、コインを購入するために運営者に支払う代金を「コイン購入代金」といいます。</li>
          <li>「管理画面」：ユーザーが各種情報の確認、変更、抹消等を行うことができる画面をいいます。</li>
          <li>「指定決済事業者」：運営者が本アプリにおける決済、精算、支払等の業務を委託する事業者をいいます。</li>
          <li>「アプリマーケット事業者」：運営者が本アプリを提供するために登録するアプリマーケットの運営事業者をいいます。</li>
          <li>「プライバシーポリシー」：運営者が定める本アプリにおける個人情報の取扱い方針をいいます。</li>
        </ul>
      <h2>第２条（本アプリの利用）</h2>
        <ul>
          <li>ユーザーは、アプリマーケット事業者において、本アプリのダウンロードを行ったうえで、ユーザー自身の対象機器にインストールし、本規約及びプライバシーポリシーをあらかじめ承認のうえ所定のユーザー登録を行うことで、本アプリを利用することができるものとします。</li>
          <li>未成年のユーザーは、前項にあたって、親権者の同意を得なくてはならないものとします。ただし、この場合においても、未成年のユーザーは、本アプリの利用について、以下の制限を受けるものとします。</li>
          <li>演奏ユーザーとなることができないこと</li>
          <li>運営者が定めた月次の上限額を超えるコインの費消をすることができないこと</li>
          <li>22時から5時に実施されるライブ演奏に関するライブ視聴権を購入することができず、かつ当該ライブ演奏を視聴することもできないこと</li>
          <li>チップの支払いができないこと</li>
          <li>その他運営者が定めた機能の利用ができないこと</li>
          <li>本規約に定めたコイン購入代金、ライブ視聴権購入代金、振込対象額等の決済、精算、支払等については、全て指定決済事業者のアカウントを通じて行うものとします。このため、ユーザーは、本アプリの利用にあたって、指定決済事業者への登録及びアカウントの取得に必要な手続きを行うものとします。</li>
          <li>ユーザーは、本アプリをダウンロード又は利用する際に発生する対象機器又は通信環境の準備等については、自らの責任と費用で行うものとし、かかる準備等へのサポートについては、運営者は行わないものとします。</li>
          <li>運営者は、いつでも新しい機能を本アプリに実装し、又は既存の機能の改善、変更、削除等を行うことができるものとします。</li>
        </ul>
      <h2>第３条（ログイン情報管理）</h2>
      <ul>
          <li>ユーザーは、本アプリのアカウントへのログインに必要な情報（以下「ログイン情報」といいます）を厳格に管理するものとします。</li>
          <li>ユーザーは、ログイン情報の第三者（知人や家族を含みます）への貸与、譲渡、名義変更、その他の処分を行ってはならないものとします。</li>
          <li>ログイン情報の第三者利用により発生した損害はユーザーが負担するものとし、運営者は、かかるユーザーの損害から一切免責されるものとします。</li>
      </ul>
      <h2>第４条（ユーザー情報の変更）</h2>
      <p>ユーザーは、ユーザー情報に変更がある場合、速やかに管理画面から変更手続きを行うものとします。</p>
      <h2>第５条（退会）</h2>
      <ul>
          <li>ユーザーは、本アプリからの退会を希望する場合、管理画面から退会手続きを行うものとします。ただし、退会手続き実施時点でユーザーの運営者に対する債務がある場合、当該債務の弁済が終了するまで、退会手続きは完了しないものとします。</li>
          <li>退会にあたってのコインの取扱いについては、第６条第７項に従うものとします。</li>
      </ul>

      <h2>第６条（コインの付与、費消、消滅）</h2>
      <ul>
          <li>本アプリにおけるライブ視聴権購入代金の決済については、全て運営者がユーザーに付与するコインによって行うものとします。</li>
          <li>運営者は、コインと現金の交換比率を定めたうえで本アプリに公表するものとし、ユーザーは常に最新の交換比率に従うものとします。</li>
          <li>視聴ユーザーは、指定決済事業者を通じた方法で、コイン購入代金を支払うことによって、運営者から当該代金相当額のコインの付与を受けるものとし、当該付与コインをライブ視聴権購入代金に充当するために費消することができるものとします。</li>
          <li>コインの有効期限は、常にユーザーに付与されたコインの全残高について設定されるものとし、前項による最終コイン付与日から179日とします。</li>
          <li>運営者は、ユーザーに対してあらかじめ合理的な期間を置いて告知することで、コインの有効期限を変更することができるものとします。</li>
          <li>視聴ユーザーは、原則としてコインの購入取引をキャンセルすることはできません。また、運営者は、運営者の故意又は重大な過失によって視聴ユーザーがコインを使用できない場合を除き、一度収受したコインの購入代金を返還しないものとします。</li>
          <li>視聴ユーザーに付与されたコインは、以下のいずれかに該当した場合、消滅するものとします。この場合において、運営者は、当該消滅コイン相当金額について、視聴ユーザーに返還する義務を負わないものとします。
          <li>当該コインの有効期限が経過した場合</li>
          <li>視聴ユーザーが本アプリの退会を行った場合</li>
          <li>その他運営者が本規約に基づき消滅させることが相当と判断した場合</li>
          <li>運営者がユーザーに対してコイン相当額の払戻額を振り込むにあたって、ユーザーが振込口座情報を登録していなかった場合又は登録した振込口座情報が誤っていた場合、当該コインは失効するものとします。ただし、失効後、当該ユーザーが、振込口座を指定したうえで運営者に当該コインに関する請求を行った場合はこの限りではありません。</li>
      </ul>

      <h2>第７条（ライブ視聴権の購入）</h2>
      <ul>
          <li>視聴ユーザーは、演奏ユーザーのライブ企画の内容を十分確認したうえで、ライブ視聴権を選択し、あらかじめ付与を受けたコインからライブ視聴権購入代金に充当を行うことで、当該ライブ視聴権の購入を行うものとします。ライブ視聴権購入契約は、本アプリにおける購入手続きが完了した時点で、演奏ユーザーと視聴ユーザーとの間で成立するものとします。</li>
          <li>運営者は、ライブ視聴権購入契約の当事者とはならず、ライブ視聴権購入契約について演奏ユーザー又は視聴ユーザーのいずれの立場にも立たないものとします。</li>
      </ul>

      <h2>第８条（視聴ユーザーによるキャンセル）</h2>
      <ul>
          <li>視聴ユーザーは、原則として、ライブ視聴権購入契約をキャンセルすることはできないものとします。ただし、以下のいずれかに該当した場合、例外的にキャンセルをすることができるものとします。
          <li>視聴ユーザーと演奏ユーザーとの間で、キャンセルに関する合意を行い、かつライブ予定日の前日までに演奏ユーザーが本アプリ上にキャンセル登録を行った場合</li>
          <li>ライブ企画で定めた開始時刻から15分を経過しても演奏ユーザーがライブの演奏を開始しない場合</li>
          <li>キャンセルが成立した場合、ライブ視聴権購入代金に相当するコインは、視聴ユーザーに返還されるものとします。</li>
      </ul>
      <h2>第９条（ライブ演奏の視聴）</h2>
      <ul>
          <li>視聴ユーザーは、ライブ視聴権購入契約成立後、ライブ企画で定めた事項に従い、ライブ演奏を視聴するものとします。</li>
          <li>視聴ユーザーは、ライブ演奏を視聴した結果、通信事業者に支払うべき全ての通信料について、自らの責任で負担するものとします。</li>
          <li>視聴ユーザーは、ライブ企画で定めた開始時刻から15分を経過した場合、ライブ演奏を視聴することができなくなります。ただし、この場合においても、当該視聴ユーザーには、第８条のキャンセル規定は適用とならず、ライブ視聴権の購入に要したコインの返還を受けることはできません。</li>
          <li>ライブ演奏については、映像や音声の乱れやインターネット回線のトラブル等によって、その一部が中断する場合があります。ただし、この場合においても、当該視聴ユーザーには、第８条のキャンセル規定は適用とならず、ライブ視聴権の購入に要したコインの返還を受けることはできません。</li>
          <li>本アプリによるライブ演奏は、演奏ユーザーの保有する対象機器１台から、視聴ユーザーの保有する対象機器１台に対してのみ、行われることを原則とします。</li>
          <li>第5項に基づき、視聴ユーザーは、自ら保有する対象機器１台から視聴する場合においてのみ、視聴ユーザー以外の第三者に対して、ライブ演奏を視聴させることができるものとします。</li>
          <li>第6項に関わらず、視聴ユーザーは、視聴場所を問わず、視聴ユーザー以外の第三者に対して、ライブ演奏を商業目的で視聴させることはできないものとします。</li>
      </ul>
      <h2>第10条（チップ）</h2>
      <ul>
          <li>視聴ユーザーは、任意によって、運営者が定めたチップアイテムを購入することで、演奏ユーザーにチップを支払うことができるものとします。</li>
          <li>視聴ユーザーは、チップを支払うことで、演奏ユーザーに対し、ライブ企画には含まれない楽曲のライブ演奏を求めてはならないものとし、当該求めに演奏ユーザーが応えなかったとしても、当該チップの返還を受けられないものとします。</li>
      </ul>
      <h2>第11条（ライブ演奏の著作権）</h2>
      <p>ライブ演奏の著作権に基づく使用権は、ライブ視聴権購入契約をもって当然に演奏ユーザーから視聴ユーザーに全面的に許諾されることはなく、当該使用許諾は、あくまでも演奏ユーザーの意思表示に基づくものとします。このため、演奏ユーザーが明示的な使用許諾を行わない限り、視聴ユーザーは、当該ライブ視聴権について、転売やさらなる二次的創作のための使用を行うことはできないものとします。</p>

      <h2>第12条（ライブ演奏の録音と録画の禁止）</h2>
      <p>視聴ユーザーは、ライブ演奏の録音及び録画について、原則として行ってはならないものとします。ただし、演奏ユーザーが明示的に許可した場合を除きます。</p>

      <h2>第13条（収納代行）</h2>
      <p>視聴ユーザーから演奏ユーザーへのライブ視聴権購入代金（本条においてコインに換価されたものをいいます）の支払いは、運営者が演奏ユーザーに代わり当該ライブ視聴権購入代金を受領し、それを運営者が演奏ユーザーに引渡すことにより行われるものとし、運営者がライブ視聴権購入代金を受領した時点で、視聴ユーザーから演奏ユーザーへのライブ視聴権購入代金の支払いは完了したものとします。</p>

      <h2>第14条（禁止行為）</h2>
      <ul>
          <li>視聴ユーザーは、本アプリで指定する決済方法以外の方法でライブ視聴権購入代金を決済してはならないものとします。また、未成年の視聴ユーザーは、第２条第２項で制限された行為を行ってはならないものとします。</li>
          <li>ユーザーは、本アプリの利用にあたり、以下の各号のいずれかに該当する行為をしてはならないものとします。</li>
          <li>法令又は公序良俗に反する行為</li>
          <li>同一ユーザーが複数のアカウントを登録する行為</li>
          <li>ユーザー本人以外のアカウントを利用する行為</li>
          <li>個人情報その他のプライベート情報を開示する行為</li>
          <li>ライブ演奏の時間内で長時間離席する行為</li>
          <li>虚偽又は事実と異なる情報を登録する行為</li>
          <li>特定の個人、法人、団体を誹謗中傷する行為</li>
          <li>政治的又は宗教的な勧誘を伴う行為</li>
          <li>本アプリと競合するサービス等の宣伝等を行う行為</li>
          <li>本アプリ外での直接取引を行おうとする一切の行為</li>
          <li>スパム行為及びこれらに類する行為</li>
          <li>本アプリ内で不当に情報を操作する行為</li>
          <li>不正アクセスや改ざん、ウイルスや有害プログラム等による攻撃行為</li>
          <li>合理性のない苦情申し立て、受取拒否、不当要求等を運営者に行う行為</li>
          <li>自動応答のための装置、ソフトウェア、アルゴリズム等を利用する行為</li>
          <li>異性交際を目的として本アプリを利用する行為</li>
          <li>本アプリの運営及び運営者の業務を妨害する行為</li>
          <li>その他運営者が不適切と判断する行為</li>
      </ul>
      <h2>第15条（アカウントの停止、凍結、抹消）</h2>
      <p>運営者は、ユーザーが以下の各号のいずれかの事由に該当すると判断した場合には、当該ユーザーに通知することなく、当該ユーザーのアカウントを停止、凍結、抹消を行うことができるものとします。</p>
      <ul>
          <li>本規約に違反した場合又はそのおそれがある場合</li>
          <li>ユーザーが本アプリに登録した情報に虚偽が判明した場合</li>
          <li>過去に本条の措置を受けた事実が判明した場合</li>
          <li>最終ログイン時から、運営者が定めて本アプリ上に掲載した期間を経過した場合</li>
          <li>支払停止、支払不能、破産、再生、不渡り、差押、租税公課滞納、その他同様の状況が発生した場合</li>
          <li>ユーザーが使用している電子メールアドレスが機能不全になった場合</li>
          <li>ユーザーによるアカウントの無断譲渡、売買、質入れ等の行為が発覚した場合</li>
          <li>その他運営者がアカウントの停止、凍結、抹消を合理的に必要と判断した場合</li>
      </ul>

      <h2>第16条(本アプリの中断、停止等)</h2>
      <ul>
        <li>運営者は、以下の各号のいずれかに該当する場合、ユーザーへの予告及び同意なく、本アプリの全部又は一部の提供を中断することができるものとします。なお、以下の事項には、指定決済事業者のシステムに生じたものを含みます。</li>
        <li>緊急でコンピュータシステムの点検、保守を行う場合</li>
        <li>停電、サーバー故障等が発生した場合</li>
        <li>コンピュータ、通信回線等に不良がある場合</li>
        <li>地震、落雷、火災等の不可抗力による場合</li>
        <li>その他運営者が必要と判断した場合</li>
        <li>運営者は、前項によってユーザーに生じた損害について、いかなる責任も負わないものとします。</li>
      </ul>
      <h2>第17条（個人情報の取扱い）</h2>
      <ul>
        <li>運営者は、ユーザー情報について、プライバシーポリシーに従って取り扱うものとします。</li>
        <li>ユーザーは、本アプリを通じて知り得たユーザー情報その他の個人情報を厳重に管理し、第三者に開示又は漏洩してはならず、ライブ視聴権購入契約の目的以外で利用してはならないものとします。</li>
      </ul>
      <h2>第18条（権利義務の譲渡）</h2>
      <p>ユーザーは、本規約上の地位、権利、義務について、第三者に譲渡してはならないものとします。</p>


      
      <h2>第19条（情報の保存）</h2>
      <p>運営者は、本アプリのサーバー上に保存された一切の情報について、運営者所定の期間を超えて保存する義務を負わず、当該期間経過後にいつでも消去できるものとし、消去後の一切の責任を負いません。</p>

      <h2>第20条（非保証等）</h2>
      <p>運営者は、ユーザーに対し、以下いずれについても保証しないものとします。</p>
      <ul>
          <li>ライブ演奏の技術、レベル、表現性等</li>
          <li>ライブ映像及び音声の品質及び継続等</li>
          <li>ユーザー間のやり取りの適切性等</li>
          <li>ユーザーの人格、態度、振る舞い等の適切性等</li>
          <li>ユーザーの経歴等に関する真実性等</li>
          <li>ライブ企画の適法性、最新性、正確性、ユーザーの期待への合致性、ユーザーの目的への適合性等</li>
          <li>本アプリにシステム障害が一切生じないこと</li>
      </ul>

      <h2>第21条（免責）</h2>
      <ul>
          <li>運営者は、ユーザー間又はユーザーと第三者との間で生じた苦情、訴訟、賠償請求等に関して、いかなる責任も負わないものとします。</li>
          <li>運営者は、本アプリ外においてユーザー間で行われたやり取りから生じたあらゆる不具合について、いかなる責任も負わないものとします。</li>
          <li>運営者は、本アプリに貼られたURLからのリンク先の内容及び当該リンク先で生じたあらゆる不具合について、いかなる責任も負わないものとします。</li>
          <li>運営者は、ユーザーの通信回線やコンピュータなどの障害によって生じたあらゆる不具合について、いかなる責任も負わないものとします。</li>
          <li>本規約に定めた運営者を免責する規定は、運営者に故意又は重過失が存する場合には適用しないものとします。</li>
      </ul>


      <h2>第22条（反社会的勢力排除）</h2>
      <ul>
          <li>ユーザー又はユーザー登録希望者は、自らが暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋等社会運動標榜ゴロ又は特殊知能暴力団、その他これらに準ずる者(以下これらを「反社会的勢力」といいます）に該当しないこと、及び次の各号のいずれにも該当しないことを表明し、かつ将来にわたっても該当しないことを確約します。</li>
          <li>反社会的勢力が経営を支配していると認められる関係を有すること</li>
          <li>反社会的勢力が経営に実質的に関与していると認められる関係を有すること</li>
          <li>自己、自社若しくは第三者の不正の利益を図る目的又は第三者に損害を加える目的をもってするなど、不当に反社会的勢力を利用していると認められる関係を有すること</li>
          <li>反社会的勢力に資金等を提供し、又は便宜を供与するなどの関与をしていると認められる関係を有すること</li>
          <li>役員又は経営に実質的に関与している者が反社会的勢力と社会的に非難されるべき関係を有すること</li>
          <li>ユーザー又はユーザー登録希望者は、自ら又は第三者を利用して次の各号の一つにでも該当する行為を行わないことを確約します。</li>
          <li>暴力的な要求行為</li>
          <li>法的な責任を超えた不当な要求行為</li>
          <li>取引に関して、脅迫的な言辞又は暴力を用いる行為</li>
          <li>風説を流布し、偽計若しくは威力を用いて相手方の信用を毀損し、又は業務を妨害する行為</li>
      </ul>

      <h2>第23条（損害賠償）</h2>
      <ul>
        <li>ユーザーは、ユーザー又はユーザーの関係者が本規約に違反することによって運営者に損害を与えた場合、運営者に対し、その損害を賠償するものとします。</li>
        <li>運営者の故意又は重大な過失による場合を除き、運営者がユーザーに負う損害賠償の金額は、当該ユーザーが直接被った損害金額に限るものとします。</li>
      </ul>
      <h2>第24条（本規約の改訂）</h2>
        <p>運営者は、本規約を改訂する場合、民法第548条の4の定めに従うものとします。</p>
      <h2>第25条（連絡及び通知）</h2>
      <ul>
        <li>ユーザーと運営者の間の連絡及び通知は、運営者の定める方法に従うものとします。</li>
        <li>ユーザーが運営者に問合せを行う場合、本アプリ上の問い合わせフォームを使用するものとし、回答方法は運営者が指定するものとします。</li>
      </ul>

      <h2>第26条（本アプリの譲渡）</h2>
      <p>運営者は、本アプリの事業を第三者に譲渡（手段を問いません）をした場合には、当該事業譲渡に伴い、本規約に定めた運営者の地位、権利、義務、ユーザーの情報、店舗情報、演奏ユーザー情報、その他の情報を当該事業譲渡の譲受人に譲渡することができるものとし、ユーザーは、あらかじめ同意するものとします。</p>


      <h2>第27条（その他）</h2>
      <ul>
        <li>運営者は、本アプリの機能、デザイン、仕様について、運営者の判断により自由に更新することができるものとします。</li>
        <li>本規約のいずれかの条項又はその一部が無効又は執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効又は執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。</li>
        <li>本規約に基づく運営者とユーザーの合意は、運営者とユーザー間の事前の合意に優先します。</li>
      </ul>

      <h2>第28条 (準拠法及び管轄合意)</h2>
      <p>本規約は、日本法に基づき解釈されるものとします。ユーザーと運営者の間で生じた一切の紛争については、訴額に応じて、運営者の住所地を管轄する地方裁判所又は簡易裁判所を第一審の専属的合意管轄裁判所とします。</p>
    </ul>

    </body>
  </html>
`;
  
  useEffect(() => {
    if (currentUser.role_id == 3) {
      setHtmlContent(performerhtmlContent);
    } else {
      setHtmlContent(customerhtmlContent);
    }
    console.log(currentUser);
  }, [])

  return (
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg,paddingTop: 30, }]}
    >
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <AppBar
          color={theme.bg}
          title={t('terms_use')}
          titleStyle={{ color: theme.txt }}
          centerTitle={true}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Avatar.Icon
                icon="arrow-left"
                style={{ backgroundColor: theme.bg }}
                color={theme.txt}
                size={40}
              />
            </TouchableOpacity>
          }
        />
        <View style={{ marginVertical: 20, flex: 1 }}>
          <WebView originWhitelist={['*']} source={{ html: htmlContent }} style={{ flex: 1, backgroundColor: theme.bg, fontweight: 'bold', fontsize: 20 }} />
        </View>
      </View>
    </SafeAreaView>
  );
}