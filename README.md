# COVID Tracing Mongolia - Ковид19 Цар Tахлын үеэр хавьталтыг түргэн шуурхай илрүүлэх гар утасны апп

Apache 2.0 лицензийн дагуу доорх нээлттэй эхийн төслүүд дээр үндэслэн хийв:

1. https://github.com/cds-snc/covid-alert-app
2. https://github.com/CovidShield/mobile

Энэхүү репо нь Apple болон Google компаниудаас гаргасан [Exposure Notification API](https://www.apple.com/covid19/contacttracing) технологийн дагуу хэрэглэгчдэд хэрэглүүлэх, React Native технологи дээр суурилсан гар утасны шийдэл юм.

- [Ерөнхий](#Ерөнхий)
- [Хөгжүүлэлтийн Орчинд](#lХөгжүүлэлтийн-Орчинд)
- [Өөрчлөлт Оруулах](#Өөрчлөлт-Оруулах)
- [Орчуулга](#Орчуулга)

## Ерөнхий

Энэхүү апп нь iOS болон Android үйлдлийн системтэй утаснууд дээр аль алинд нь ажиллах боломжийг нэг кодны эх үүсвэрээс бий болгож өгдөг React Native технологийг ашиглан бүтээсэн юм. Энэ апп нь [covid-tracing-backend server](https://github.com/covid-tracing-mongolia/server) гэсэн системтэй уялдан ажиллана.

## Жишээ

![S1](/images/1.png)

## Хөгжүүлэлтийн Орчинд

### Хөгжүүлэлтийн Өмнөх Шаардлагатай Зүйлс

React Native технологи дээр суурилсан учир нэн түрүүнд [React Native Хөгжүүлэлтийн Орчин Бэлдэх](https://reactnative.dev/docs/environment-setup) линкээр орж, үндсэн шаардлагатай зүйлсээ суулгаарай.

#### Node

- [Node 12 LTS](https://nodejs.org/en/download/)

#### iOS

- Xcode 11.5 эсвэл түүнээс дээш
- iOS утас эсвэл simulator (iOS 13.5 утас эсвэл)
- Зөв CocoaPods хувилбарыг суулгахын тулд: [Bundler](https://bundler.io/)
- Google/Apple-аас гаргасан Exposure Notification API-г хэрэглэхийн тулд эдгээр компаниуд тус бүрээс зөвшөөрөл авсан байх шаардлагатай байдаг. Зөвшөөрөл авахын тулд Монгол Улсын Засгийн Газар / Эрүүл Мэндийн Яамны албан ёсны зөвшөөрлийг авах хэрэгтэй болно гэсэн үг. ЭМЯ өөрөө хөгжүүлэлтийн аккаунт-тай бол түүгээрээ хүсэлт гаргаж болно. Эсвэл аль нэг хөгжүүлэгчийн аккаунтыг батлан даах хэлбэрээр хүсэлт илгээж тухайн аккаунт дээр зөвшөөрөл авхуулуулж болох юм. Энэ төслийг хийж эхлэх үед ЭМЯ-д холбогдож зөвшөөрөл авахаас илүүтэйгээр ажилладаг болгочихоод хүсэлтээ илгээх зорилготой байгаа тул одоогоор энэ зөвшөөрлийг авч амжаагүй байгаа болно. (https://developer.apple.com/documentation/exposurenotification)

#### Android

- үйлдлийн системтэй утас (тэр нь Google Play Services болон Google Play Services Beta-г ажиллуулах чадвартай байх хэрэгтэй). Хэрвээ бүртгүүлэх шаардлагатай бол: https://developers.google.com/android/guides/beta-program.
- Дээр дурьдсанчлан Exposure Notification API-г хэрэглэхийн тулд Google компаниас мөн зөвшөөрөл авах хэрэгтэй болж байгаа юм. Эцсийн апп бэлэн болоод Google Play-д гаргах үед APPLICATION_ID дээрээ зөвшөөрөл авсан байх хэрэгтэй.

#### 1. Репог хуулж авах

```bash
git clone git@github.com:cds-snc/covid-shield-mobile.git
```

#### 2. Dependencies суулгах

```bash
yarn install
```

##### 2.1 iOS нэмэлт алхамууд

###### 2.1.1 Cocoapods суулгах

```bash
sudo gem install cocoapods
```

###### 2.1.2 Pod-уудаа суулгах

```bash
bundle install && yarn pod-install
```

`bundle install` хийхэд ямар нэг алдаа гарвал Ruby 2.7 суугаагүйгээс алдаа гарч магад. Тиймээс Ruby 2.7 суусан эсэхээ шалгаад мөн `ruby --version` гэж ажиллуулахад 2.7 гэж гарж байгаа эсэхээ шалгаарай. Гараагүй байвал PATH гэсэн environment variable дотроо Ruby 2.7 суусан байгаа замаа зааж өгөх хэрэгтэй болно.

#### 3. Орчны тохиргоо

`.env` гэсэн тохиргоо агуулах файлыг шалгаад, шаардлагатай зүйлсийг тохируулж өгнө. Ерөнхий мэдээлэл: [react-native-config](https://www.npmjs.com/package/react-native-config#different-environments).

Жишээ нь::

```bash
ENVFILE=.env.production yarn run-ios
ENVFILE=.env.production yarn run-android
```

Одоо байгаа `.env` файлыг хөгжүүлэлтийн орчинд бол `.env.development`, production орчинд бол `.env.production` гэж байгаад доторх тохиргоонуудыг хийж болно.

#### 4. Апп-аа хөгжүүлэлтийн орчинд ажиллуулах

iOS болон Android дээр доорх коммандыг гүйцэтгэн апп-аа ажиллуулна:

```bash
yarn run-ios
yarn run-android
```

XCode эсвэл Android Studio-р апп аа бас ажиллуулах боломжтой:

- iOS: `CovidShield.xcworkspace` файлыг XCode-оор онгойлгох.
- Android: `android` гэсэн folder-г Android Studio гоор нээх..

### Хөгжүүлэлтийн горим

Хөгжүүлэлтийн горимд ажиллаж байгаа үед Exposure Notification API зэрэг системүүдийг тест хийх боломжгүй учир апп аа асаахад энэ тохиргоо унтарсан байна, асаана уу? гэсэн анхааруулга гарч байгаа. Энэ анхааруулгыг унтраан хөгжүүлэлтийн орчинд хэрэглэхдээ `.env` файл доторх `TEST_MODE=` гэсэн хувьсагчийн утгыг зааж өгсөнөөр унтрааж болно.

#### iOS хөгжүүлэлтийн орчин

Хэрвээ та:

- IP хаягтай backend сервэртэй холбогдох эсвэл backend нь SSL байхгүй бол, эсвэл
- Апп аа simulator дотор ажиллуулах хүсэлтэй бөгөөд React Native дотор хийсэн код өөрчлөлтөө шууд метро сервэрээр дамжуулан авч байхыг хүсвэл доорх тохиргоонуудыг `info.plist` дотроо оруулж өгөөрэй. Эдгээр тохиргоонууд нь зөвхөн хөгжүүлэлтийн орчинд гэдгийг анхаарна уу. Тиймээс git repo рүү хийхгүй байгаарай.

```
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsLocalNetworking</key>
		<true/>
		<key>NSAllowsArbitraryLoads</key>
		<false/>
	</dict>
```

## Өөрчлөлт Оруулах

[Theme File](https://github.com/covid-tracing-mongolia/mobile/tree/master/src/shared/theme) дотор ихэнх харагдах байдал, өнгө төрхийг өөрчлөх боломжтой.

## Орчуулга

COVID Tracing Mongolia апп нь үндсэн Монгол хэл дээр байх бөгөөд гадны expat ууд манай улсад амьдардаг учир Англи хэлийг мөн оруулж өгсөн байгаа. Нэмэлт хэл нэмэх бол [translations directory](https://github.com/cds-snc/covid-alert-app/tree/master/src/locale/translations) дотор байгаа файлуудад зохих орчуулгын ажлуудыг хийнэ.

Хэл нэмсэн тохиолдолд дараа нь: `generate-translations` гэсэн коммандыг ажиллуулсанаар апп дотор хэлний сонголт нэмэгдэн орж ирэх болно. Жишээ:

```bash
yarn generate-translations
```

### Шинээр орчуулга нэмэхдээ

1. [src/locale/translations/](./src/locale/translations/) дотор шинэ i18n файл нэмж үүсгэх.
2. Шинээр `pt` гэсэн сонголт [translations.js](./translations.js) дотор нэмж өгнө.
3. `yarn generate-translations` комманд ажиллуулж шинэ орчуулгыг  апп-руу оруулна.
4. [src/components/LanguageToggle.tsx](./src/components/LanguageToggle.tsx) дотор шинэ хэлний сонголтыг нэмнэ.
5. [src/screens/language/Language.tsx](./src/screens/language/Language.tsx) дотор шинэ хэлний сонголтыг нэмнэ.
6. Xcode доторх `Localizations` гэсэн тохиргоонд шинэ сонголтыг нэмнэ (Project -> CovidShield -> Info tab -> Localizations) and make sure `Launch Screen.storyboard` is checked.

## Тест Хийх

- [Тестийн төлөвлөгөө](./TEST_PLAN.md)
- [E2E тест: Detox](./e2e/DETOX_DOC.md)

## COVID Tracing Mongolia-г хэн хөгжүүлсэн бэ?

COVID Tracing Mongolia нь [CovidShield]((https://www.covidshield.app/)) гэсэн нээлттэй эхийн (Apache 2.0 License) төсөл дээр үндэслэн хийсэн төсөл юм. CovidShield төслийг Канада-д төвтэй Shopify компанийн сайн дурын инженерүүд зохион бүтээж, хөгжүүлсэн байдаг. COVID Tracing Mongolia-г Цар Тахалтай тэмцэж байгаа өнөө үед технологийн салбарт олон жил ажилласаны хувьд улсдаа чадах зүйлээрээ хувь нэмрээ оруулах үүднээс сайн дурын, Монгол мэргэжилтнүүд хөгжүүлсэн юм.

Холбоо барих хүсэлтэй бол: amarbayar.amarsanaa@gmail.com гэсэн хаягаар холбогдоорой.

## Асуудал Гарвал

### [Android] debug.keystore той холбоотой алдаа

Logs

```bash
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:packageDebug'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade
   > com.android.ide.common.signing.KeytoolException: Failed to read key AndroidDebugKey from store "/Users/YOUR_USER/.android/debug.keystore": keystore password was incorrect
```

Шинээр `debug.keystore`-г үүсгэх:

```bash
cd android/app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

Үүссэн debug.keystore файл аа `~/.android/debug.keystore` руу хуулна.:

```bash
cd android/app
cp debug.keystore ~/.android/debug.keystore
```

Тэгээд прожектийнхоо үндсэн фолдероос: `yarn run-android` ажиллуулаад үзээрэй.

### [MacOS] Cocoapods Суулгахад алдаа гарвал

CocoPoads-г суулгаж байхад дараахтай адилхан ЭСВЭЛ төстэй (яг адилхан байх албагүй):

```bash
ERROR:  Loading command: install (LoadError)
  dlopen(/Users/$home/ruby/2.6.5/x86_64-darwin18/openssl.bundle, 9): Library not loaded: /usr/local/opt/openssl/lib/libssl.1.0.0.dylib
  Referenced from: /Users/$home/ruby/2.6.5/x86_64-darwin18/openssl.bundle
ERROR:  While executing gem ... (NoMethodError)
```

Таний хөгжүүлэлтийн орчинд суулгасан байгаа Ruby нь OpenSSL байхгүй хувилбар байна гэсэн үг. Тэгэхээр OpenSSL тэй Ruby суулгавал болно гэсэн үг. :

1. rvm эсвэл rbenv суулгаад: https://rvm.io/
1. Доорх коммандыг ажиллуулна. Багагүй хугацаа зарцуулж магадгүй учир тэвчээртэй байхыг хүсье.

```bash
rvm reinstall 2.6.5 --with-openssl-dir=/usr/local/opt/openssl
```

Одоо та cocoapods оо суулгаад үзээрэй.

## License

### Apache License 2.0
covid-tracing-mongolia/mobile is licensed under the Apache License 2.0. A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

---
