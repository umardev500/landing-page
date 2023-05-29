import React from 'react'

interface Props {
  className?: string
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 186 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.9531 72.4369V62.8899H42.9783V72.4369H41.9531Z" fill="#269431" />
      <path
        d="M44.1294 65.8373V65.3887C44.3857 65.3204 44.5694 65.1965 44.6804 65.0171C44.8 64.8292 44.8641 64.59 44.8727 64.2995H44.3857V62.8899H45.4109V63.9663C45.4109 64.4618 45.3041 64.8719 45.0905 65.1965C44.8769 65.5212 44.5566 65.7347 44.1294 65.8373Z"
        fill="#269431"
      />
      <path
        d="M46.5449 72.4369V65.5682H47.506V66.8753L47.3523 66.683C47.5402 66.2815 47.8179 65.9697 48.1852 65.7476C48.5611 65.5254 48.9712 65.4144 49.4155 65.4144C49.9451 65.4144 50.4235 65.5639 50.8507 65.8629C51.2779 66.1619 51.5812 66.5506 51.7606 67.029L51.4914 67.0419C51.6623 66.5122 51.9571 66.1107 52.3757 65.8373C52.8028 65.5553 53.2727 65.4144 53.7853 65.4144C54.2466 65.4144 54.6695 65.5254 55.054 65.7476C55.447 65.9697 55.7588 66.2772 55.9894 66.6702C56.2287 67.0547 56.3483 67.4904 56.3483 67.9773V72.4369H55.3871V68.349C55.3871 67.9304 55.3103 67.5758 55.1565 67.2853C55.0112 66.9949 54.8105 66.7727 54.5542 66.619C54.2979 66.4567 54.0031 66.3755 53.67 66.3755C53.3453 66.3755 53.0506 66.4567 52.7857 66.619C52.5209 66.7727 52.3116 66.9991 52.1578 67.2982C52.004 67.5886 51.9272 67.9389 51.9272 68.349V72.4369H50.966V68.349C50.966 67.9304 50.8892 67.5758 50.7354 67.2853C50.5901 66.9949 50.3894 66.7727 50.1331 66.619C49.8768 66.4567 49.582 66.3755 49.2489 66.3755C48.9157 66.3755 48.6167 66.4567 48.3518 66.619C48.0955 66.7727 47.8905 66.9991 47.7367 67.2982C47.5829 67.5886 47.506 67.9389 47.506 68.349V72.4369H46.5449Z"
        fill="#269431"
      />
      <path
        d="M62.3609 74.9999V65.5682H63.322V67.1059L63.1682 66.8368C63.4416 66.4011 63.8047 66.0551 64.2575 65.7988C64.7188 65.5425 65.2442 65.4144 65.8337 65.4144C66.483 65.4144 67.0597 65.5724 67.5637 65.8885C68.0763 66.1961 68.4778 66.619 68.7683 67.1572C69.0673 67.6954 69.2168 68.3105 69.2168 69.0025C69.2168 69.686 69.0673 70.3011 68.7683 70.8479C68.4778 71.3861 68.0763 71.8132 67.5637 72.1293C67.0597 72.4369 66.483 72.5907 65.8337 72.5907C65.2442 72.5907 64.7103 72.4583 64.2319 72.1934C63.762 71.92 63.4074 71.5356 63.1682 71.0401L63.322 70.8991V74.9999H62.3609ZM65.7824 71.6296C66.2438 71.6296 66.6538 71.5142 67.0127 71.2836C67.38 71.0529 67.6662 70.7411 67.8713 70.3481C68.0848 69.9465 68.1916 69.498 68.1916 69.0025C68.1916 68.4985 68.0848 68.05 67.8713 67.657C67.6662 67.264 67.38 66.9522 67.0127 66.7215C66.6538 66.4908 66.2438 66.3755 65.7824 66.3755C65.3211 66.3755 64.9025 66.4908 64.5266 66.7215C64.1592 66.9522 63.8645 67.2683 63.6424 67.6698C63.4288 68.0628 63.322 68.507 63.322 69.0025C63.322 69.498 63.4288 69.9465 63.6424 70.3481C63.8645 70.7411 64.1592 71.0529 64.5266 71.2836C64.9025 71.5142 65.3211 71.6296 65.7824 71.6296Z"
        fill="#666666"
      />
      <path
        d="M74.1248 72.5907C73.4755 72.5907 72.886 72.4369 72.3563 72.1293C71.8267 71.8132 71.4038 71.3861 71.0877 70.8479C70.7801 70.3011 70.6263 69.6817 70.6263 68.9897C70.6263 68.3063 70.7801 67.6954 71.0877 67.1572C71.3952 66.619 71.8096 66.1961 72.3307 65.8885C72.8604 65.5724 73.4584 65.4144 74.1248 65.4144C74.7911 65.4144 75.3849 65.5682 75.906 65.8757C76.4357 66.1833 76.8501 66.6062 77.1491 67.1444C77.4566 67.6826 77.6104 68.2977 77.6104 68.9897C77.6104 69.6903 77.4524 70.3139 77.1363 70.8607C76.8202 71.3989 76.3973 71.8218 75.8676 72.1293C75.3465 72.4369 74.7655 72.5907 74.1248 72.5907ZM74.1248 71.6296C74.5861 71.6296 75.0005 71.5142 75.3678 71.2836C75.7437 71.0529 76.0385 70.7368 76.252 70.3353C76.4742 69.9337 76.5852 69.4852 76.5852 68.9897C76.5852 68.4942 76.4742 68.05 76.252 67.657C76.0385 67.264 75.7437 66.9522 75.3678 66.7215C75.0005 66.4908 74.5861 66.3755 74.1248 66.3755C73.6634 66.3755 73.2448 66.4908 72.8689 66.7215C72.5016 66.9522 72.2068 67.264 71.9847 67.657C71.7626 68.05 71.6515 68.4942 71.6515 68.9897C71.6515 69.4852 71.7626 69.9337 71.9847 70.3353C72.2068 70.7368 72.5016 71.0529 72.8689 71.2836C73.2448 71.5142 73.6634 71.6296 74.1248 71.6296Z"
        fill="#666666"
      />
      <path
        d="M81.689 72.5907C81.0312 72.5907 80.4545 72.4241 79.959 72.0909C79.4635 71.7577 79.1047 71.3049 78.8826 70.7325L79.6899 70.3481C79.8864 70.7667 80.1598 71.0999 80.5101 71.3476C80.8689 71.5954 81.2619 71.7193 81.689 71.7193C82.0991 71.7193 82.4451 71.621 82.727 71.4245C83.0089 71.2195 83.1499 70.9546 83.1499 70.63C83.1499 70.3908 83.0816 70.2028 82.9449 70.0662C82.8082 69.9209 82.6501 69.8099 82.4707 69.733C82.2913 69.6561 82.1333 69.6005 81.9966 69.5664L81.0098 69.2845C80.3776 69.105 79.9206 68.853 79.6386 68.5284C79.3567 68.2037 79.2158 67.8278 79.2158 67.4007C79.2158 66.9991 79.3183 66.6489 79.5233 66.3499C79.7284 66.0508 80.006 65.8202 80.3563 65.6579C80.7065 65.4955 81.0953 65.4144 81.5224 65.4144C82.1034 65.4144 82.6288 65.5682 83.0986 65.8757C83.5771 66.1747 83.9145 66.5933 84.111 67.1316L83.2909 67.516C83.12 67.1316 82.8722 66.8326 82.5476 66.619C82.2315 66.3968 81.877 66.2858 81.484 66.2858C81.0995 66.2858 80.792 66.384 80.5613 66.5805C80.3306 66.777 80.2153 67.0248 80.2153 67.3238C80.2153 67.5545 80.2751 67.7381 80.3947 67.8748C80.5143 68.0115 80.651 68.114 80.8048 68.1824C80.9671 68.2507 81.1081 68.302 81.2277 68.3362L82.3682 68.6693C82.9235 68.8317 83.3549 69.0837 83.6625 69.4254C83.9786 69.7671 84.1366 70.1687 84.1366 70.63C84.1366 71.0059 84.0299 71.3434 83.8163 71.6424C83.6112 71.9414 83.325 72.1763 82.9577 72.3472C82.5903 72.5095 82.1674 72.5907 81.689 72.5907Z"
        fill="#666666"
      />
      <path
        d="M88.209 72.5907C87.5512 72.5907 86.9746 72.4241 86.479 72.0909C85.9835 71.7577 85.6247 71.3049 85.4026 70.7325L86.2099 70.3481C86.4064 70.7667 86.6798 71.0999 87.0301 71.3476C87.3889 71.5954 87.7819 71.7193 88.209 71.7193C88.6191 71.7193 88.9651 71.621 89.247 71.4245C89.529 71.2195 89.6699 70.9546 89.6699 70.63C89.6699 70.3908 89.6016 70.2028 89.4649 70.0662C89.3282 69.9209 89.1702 69.8099 88.9907 69.733C88.8113 69.6561 88.6533 69.6005 88.5166 69.5664L87.5299 69.2845C86.8977 69.105 86.4406 68.853 86.1587 68.5284C85.8768 68.2037 85.7358 67.8278 85.7358 67.4007C85.7358 66.9991 85.8383 66.6489 86.0433 66.3499C86.2484 66.0508 86.526 65.8202 86.8763 65.6579C87.2266 65.4955 87.6153 65.4144 88.0424 65.4144C88.6234 65.4144 89.1488 65.5682 89.6187 65.8757C90.0971 66.1747 90.4345 66.5933 90.631 67.1316L89.8109 67.516C89.64 67.1316 89.3923 66.8326 89.0676 66.619C88.7515 66.3968 88.397 66.2858 88.004 66.2858C87.6196 66.2858 87.312 66.384 87.0813 66.5805C86.8507 66.777 86.7353 67.0248 86.7353 67.3238C86.7353 67.5545 86.7951 67.7381 86.9147 67.8748C87.0344 68.0115 87.171 68.114 87.3248 68.1824C87.4871 68.2507 87.6281 68.302 87.7477 68.3362L88.8882 68.6693C89.4435 68.8317 89.875 69.0837 90.1825 69.4254C90.4986 69.7671 90.6567 70.1687 90.6567 70.63C90.6567 71.0059 90.5499 71.3434 90.3363 71.6424C90.1313 71.9414 89.8451 72.1763 89.4777 72.3472C89.1103 72.5095 88.6875 72.5907 88.209 72.5907Z"
        fill="#666666"
      />
      <path
        d="M92.3455 72.4369V65.5682H93.3066V72.4369H92.3455ZM92.3455 64.2995V62.8899H93.3066V64.2995H92.3455Z"
        fill="#666666"
      />
      <path
        d="M98.7467 72.5907C98.1572 72.5907 97.6233 72.4583 97.1449 72.1934C96.675 71.92 96.3204 71.5356 96.0812 71.0401L96.235 70.8991V72.4369H95.2739V62.7361H96.235V67.1059L96.0812 66.8368C96.3546 66.4011 96.7177 66.0551 97.1705 65.7988C97.6318 65.5425 98.1572 65.4144 98.7467 65.4144C99.396 65.4144 99.9727 65.5724 100.477 65.8885C100.989 66.1961 101.391 66.619 101.681 67.1572C101.98 67.6954 102.13 68.3105 102.13 69.0025C102.13 69.686 101.98 70.3011 101.681 70.8479C101.391 71.3861 100.989 71.8132 100.477 72.1293C99.9727 72.4369 99.396 72.5907 98.7467 72.5907ZM98.6955 71.6296C99.1568 71.6296 99.5669 71.5142 99.9257 71.2836C100.293 71.0529 100.579 70.7411 100.784 70.3481C100.998 69.9465 101.105 69.498 101.105 69.0025C101.105 68.4985 100.998 68.05 100.784 67.657C100.579 67.264 100.293 66.9522 99.9257 66.7215C99.5669 66.4908 99.1568 66.3755 98.6955 66.3755C98.2341 66.3755 97.8155 66.4908 97.4396 66.7215C97.0722 66.9522 96.7775 67.2683 96.5554 67.6698C96.3418 68.0628 96.235 68.507 96.235 69.0025C96.235 69.498 96.3418 69.9465 96.5554 70.3481C96.7775 70.7411 97.0722 71.0529 97.4396 71.2836C97.8155 71.5142 98.2341 71.6296 98.6955 71.6296Z"
        fill="#666666"
      />
      <path d="M103.821 72.4369V62.7361H104.782V72.4369H103.821Z" fill="#666666" />
      <path
        d="M109.876 72.5907C109.236 72.5907 108.655 72.4369 108.134 72.1293C107.621 71.8132 107.215 71.3818 106.916 70.835C106.617 70.2883 106.468 69.6689 106.468 68.9769C106.468 68.2849 106.613 67.6741 106.903 67.1444C107.194 66.6062 107.587 66.1833 108.082 65.8757C108.586 65.5682 109.15 65.4144 109.774 65.4144C110.269 65.4144 110.709 65.5084 111.094 65.6963C111.487 65.8757 111.82 66.1235 112.093 66.4396C112.367 66.7471 112.576 67.0974 112.721 67.4904C112.867 67.8748 112.939 68.2721 112.939 68.6822C112.939 68.7676 112.935 68.8658 112.926 68.9769C112.918 69.0794 112.905 69.1862 112.888 69.2973H107.083V68.4002H112.337L111.876 68.7847C111.952 68.3148 111.897 67.8962 111.709 67.5288C111.53 67.1529 111.269 66.8582 110.927 66.6446C110.586 66.4225 110.201 66.3114 109.774 66.3114C109.347 66.3114 108.95 66.4225 108.582 66.6446C108.223 66.8667 107.941 67.1786 107.736 67.5801C107.531 67.9731 107.45 68.4429 107.493 68.9897C107.45 69.5365 107.536 70.0149 107.749 70.425C107.971 70.8265 108.27 71.1383 108.646 71.3605C109.031 71.5826 109.441 71.6936 109.876 71.6936C110.381 71.6936 110.803 71.574 111.145 71.3348C111.487 71.0956 111.765 70.7966 111.978 70.4378L112.798 70.8735C112.662 71.181 112.452 71.4672 112.17 71.7321C111.888 71.9884 111.551 72.1977 111.158 72.36C110.773 72.5138 110.346 72.5907 109.876 72.5907Z"
        fill="#666666"
      />
      <path
        d="M5.49683 24.8392V0H10.498L19.8002 12.3362H17.4663L26.5018 0H31.5029V24.8392H26.335V5.70134L28.4022 6.16812L18.8333 18.5044H18.1665L8.93097 6.16812L10.6647 5.70134V24.8392H5.49683Z"
        fill="#666666"
      />
      <path
        d="M39.2417 24.8392V0H55.9456V4.50106H44.4096V10.1357H55.2788V14.6368H44.4096V20.3381H55.9456V24.8392H39.2417Z"
        fill="#666666"
      />
      <path
        d="M62.2093 24.8392V0H71.7116C73.4231 0 74.9345 0.30007 76.246 0.900212C77.5796 1.50035 78.6243 2.38945 79.38 3.56751C80.1358 4.74556 80.5136 6.20146 80.5136 7.9352C80.5136 9.62449 80.1247 11.0693 79.3467 12.2696C78.5687 13.4476 77.524 14.3367 76.2126 14.9368L81.8806 24.8392H76.0793L69.9445 13.8699L73.2786 15.8371H67.3772V24.8392H62.2093ZM67.3772 11.336H71.7449C72.4784 11.336 73.1119 11.1915 73.6454 10.9026C74.1788 10.6136 74.59 10.2135 74.879 9.70228C75.1902 9.19105 75.3458 8.60203 75.3458 7.9352C75.3458 7.24615 75.1902 6.64601 74.879 6.13478C74.59 5.62355 74.1788 5.22345 73.6454 4.9345C73.1119 4.64554 72.4784 4.50106 71.7449 4.50106H67.3772V11.336Z"
        fill="#666666"
      />
      <path
        d="M87.7817 24.8392V0H97.284C98.9955 0 100.507 0.30007 101.818 0.900212C103.152 1.50035 104.197 2.38945 104.952 3.56751C105.708 4.74556 106.086 6.20146 106.086 7.9352C106.086 9.62449 105.697 11.0693 104.919 12.2696C104.141 13.4476 103.096 14.3367 101.785 14.9368L107.453 24.8392H101.652L95.5169 13.8699L98.851 15.8371H92.9496V24.8392H87.7817ZM92.9496 11.336H97.3173C98.0508 11.336 98.6843 11.1915 99.2178 10.9026C99.7512 10.6136 100.162 10.2135 100.451 9.70228C100.763 9.19105 100.918 8.60203 100.918 7.9352C100.918 7.24615 100.763 6.64601 100.451 6.13478C100.162 5.62355 99.7512 5.22345 99.2178 4.9345C98.6843 4.64554 98.0508 4.50106 97.3173 4.50106H92.9496V11.336Z"
        fill="#666666"
      />
      <path d="M113.354 24.8392V0H118.522V24.8392H113.354Z" fill="#666666" />
      <path
        d="M124.427 24.8392L132.829 0H139.697L148.099 24.8392H142.465L140.798 19.7713H131.695L130.028 24.8392H124.427ZM133.129 15.2703H139.364L135.563 3.53416H136.963L133.129 15.2703Z"
        fill="#666666"
      />
      <path
        d="M154.015 24.8392V0H159.016L168.318 12.3362H165.984L175.02 0H180.021V24.8392H174.853V5.70134L176.92 6.16812L167.351 18.5044H166.684L157.449 6.16812L159.183 5.70134V24.8392H154.015Z"
        fill="#666666"
      />
      <path
        d="M131.402 58.9093C132.287 57.5795 133.129 56.2458 134.04 54.9606C135.611 52.7448 137.291 50.6149 139.323 48.7882C140.012 48.1692 140.728 47.569 141.605 47.2425C142.03 47.0846 142.521 46.9734 142.964 47.0167C144.177 47.1366 144.838 48.11 144.556 49.3811C144.392 50.1206 144.073 50.8268 143.822 51.547C143.787 51.6469 143.739 51.7422 143.676 51.8874C144.695 51.7275 145.664 51.5903 146.626 51.4224C149.743 50.8794 152.859 50.3344 155.972 49.7702C156.837 49.6136 157.689 49.3924 158.543 49.1832C158.788 49.1233 159.024 49.014 159.254 48.9067C159.594 48.7489 159.932 48.7875 160.209 49.0393C160.432 49.2425 160.424 49.3991 160.167 49.5656C159.515 49.9893 159.057 50.5496 158.889 51.3218C158.687 52.2471 159.134 52.8188 160.09 52.8394C161.398 52.8674 162.587 52.437 163.735 51.8734C165.184 51.1625 166.49 50.2345 167.691 49.1646C167.938 48.9441 168.145 48.974 168.374 49.1226C168.605 49.2718 168.505 49.477 168.419 49.6562C167.558 51.4444 166.691 53.2311 165.827 55.0173C165.774 55.1245 165.72 55.2305 165.649 55.371C165.751 55.3597 165.816 55.3617 165.876 55.3444C169.574 54.3084 173.275 53.2838 176.968 52.2285C179.131 51.6109 181.28 50.944 183.316 49.972C183.917 49.6849 184.48 49.3211 185.069 49.0087C185.174 48.9534 185.322 48.98 185.45 48.968C185.432 49.1013 185.464 49.2872 185.388 49.3578C185.146 49.5823 184.889 49.8208 184.592 49.9514C183.32 50.511 182.054 51.0933 180.747 51.5603C176.132 53.2085 171.409 54.5129 166.693 55.836C166.19 55.9773 165.608 56.0126 165.207 56.2984C164.808 56.5829 164.588 57.1185 164.295 57.5476C163.252 59.0759 162.131 60.5395 160.726 61.7634C160.035 62.3656 159.29 62.8906 158.415 63.2017C157.818 63.4136 157.207 63.5188 156.577 63.3776C155.623 63.1637 155.145 62.4282 155.326 61.4656C155.455 60.7854 155.818 60.2337 156.295 59.7507C157.185 58.8507 158.256 58.2038 159.406 57.7121C160.816 57.1092 162.264 56.5949 163.693 56.0359C163.821 55.9859 163.981 55.92 164.039 55.8141C164.899 54.2758 165.744 52.7295 166.592 51.1852C166.565 51.1632 166.538 51.1419 166.512 51.1199C166.426 51.1725 166.338 51.2232 166.254 51.2778C164.78 52.2352 163.241 53.0499 161.495 53.3964C160.709 53.5523 159.924 53.5809 159.152 53.3064C158.14 52.9467 157.661 52.1186 157.887 51.0786C157.946 50.8101 158.045 50.547 158.156 50.2951C158.263 50.0546 158.409 49.8308 158.554 49.569C157.869 49.7322 157.217 49.9107 156.555 50.042C153.278 50.6922 149.998 51.3338 146.719 51.9707C145.647 52.1785 144.569 52.3551 143.498 52.5663C143.348 52.5956 143.175 52.7122 143.091 52.8394C142.232 54.1445 141.294 55.3824 140.101 56.4077C139.653 56.7934 139.173 57.1392 138.571 57.2571C137.761 57.415 137.089 56.8707 137.093 56.0559C137.097 54.9933 137.605 54.1918 138.435 53.5749C139.402 52.8567 140.521 52.4837 141.686 52.2471C142.049 52.1732 142.266 52.0106 142.433 51.6875C142.883 50.8181 143.337 49.9534 143.484 48.9707C143.507 48.8181 143.516 48.6609 143.51 48.5063C143.48 47.8208 143.106 47.5297 142.443 47.7409C142.068 47.8608 141.703 48.0553 141.377 48.2792C139.793 49.3671 138.491 50.7568 137.257 52.2078C134.195 55.8081 131.751 59.7874 129.93 64.1438C129.76 64.5508 129.574 64.6274 129.253 64.4462C129.021 64.3156 129.007 64.1191 129.066 63.9006C129.285 63.0871 129.487 62.2684 129.736 61.4642C130.855 57.8514 132.048 54.2644 133.55 50.7868C133.699 50.4417 133.868 50.1046 134.052 49.7082C133.926 49.7648 133.842 49.7968 133.764 49.8388C131.056 51.2825 128.25 52.493 125.293 53.3371C123.464 53.8594 121.61 54.2271 119.691 54.1052C118.783 54.0473 117.897 53.8894 117.071 53.493C116.346 53.1445 115.778 52.6515 115.704 51.7848C115.653 51.1899 115.889 50.6775 116.223 50.2052C116.356 50.0187 116.51 49.8468 116.618 49.6143C116.32 49.7961 116.001 49.9507 115.729 50.1652C114.751 50.938 113.792 51.7335 112.822 52.5156C112.092 53.1046 111.345 53.6782 110.396 53.8634C110.064 53.928 109.703 53.9413 109.37 53.8874C108.356 53.7241 107.813 52.8914 108.095 51.8661C108.243 51.3244 108.544 50.8248 108.765 50.3318C108.711 50.3578 108.595 50.4111 108.482 50.469C105.297 52.1179 102.059 53.6495 98.6239 54.7228C97.1205 55.1925 95.5951 55.5895 94.0006 55.4916C93.5 55.461 92.9839 55.3404 92.5187 55.1525C91.9149 54.908 91.6894 54.3677 91.9189 53.7508C92.0823 53.3124 92.3333 52.892 92.6151 52.5156C92.9872 52.0186 93.4337 51.5783 93.8366 51.1033C94.1251 50.7628 94.1325 50.5656 93.749 50.3431C93.1472 49.9933 92.504 49.7129 91.8681 49.4271C91.7817 49.3884 91.6157 49.4597 91.516 49.5243C88.8653 51.2405 86.0427 52.5882 82.9984 53.4557C80.7166 54.1059 78.3999 54.429 76.0244 54.1046C75.0143 53.9666 74.0237 53.7535 73.1448 53.2065C72.3349 52.7028 71.8664 52.0126 72.029 51.0113C72.0337 50.9833 72.0196 50.952 72.0096 50.8961C71.8918 50.9634 71.7867 51.0206 71.6843 51.0819C69.051 52.6515 66.3508 54.0852 63.4298 55.0612C62.2323 55.4616 61.0121 55.7661 59.7389 55.7947C59.0448 55.8101 58.3587 55.7568 57.6987 55.5123C56.5019 55.0699 55.783 54.0879 55.7777 52.8194C55.7743 52.0986 55.8286 51.3777 55.8486 50.6569C55.854 50.453 55.8312 50.2478 55.8172 49.954C55.5019 50.1859 55.2455 50.3411 55.0287 50.539C53.3452 52.0786 51.6591 53.6156 49.9951 55.1752C49.0942 56.0199 48.234 56.9087 47.3552 57.7767C47.2093 57.9213 47.0914 58.1125 46.823 58.0066C46.5473 57.898 46.3411 57.7581 46.2902 57.4343C46.1697 56.6768 46.2313 55.9286 46.3692 55.1832C46.813 52.7768 47.7019 50.515 48.7046 48.2998C51.3988 42.3465 54.7509 36.7843 58.7965 31.6405C59.2363 31.0815 59.6954 30.5359 60.1613 29.9982C60.6272 29.4606 61.1125 28.9403 61.6419 28.354C61.245 28.3933 60.9009 28.4186 60.5596 28.4626C58.5147 28.7258 56.4698 28.9882 54.4276 29.2687C54.2509 29.2927 54.0467 29.4086 53.9323 29.5459C48.7106 35.791 44.0338 42.3992 40.3724 49.6862C37.8958 54.6149 35.8329 59.7068 34.2117 64.9759C34.0376 65.5421 33.5711 65.6674 33.1273 65.2783C32.9205 65.0971 32.9078 64.8952 32.9968 64.6481C33.8094 62.3956 34.5557 60.1171 35.4339 57.89C38.8235 49.2932 43.3832 41.3532 49.1196 34.0935C50.2903 32.6118 51.5888 31.2307 52.8292 29.8044C52.9135 29.7071 53.0025 29.6132 53.1505 29.4506C51.6705 29.6884 50.2843 29.899 48.9021 30.1355C43.6181 31.0395 38.3844 32.1701 33.2117 33.5751C25.9244 35.5545 18.8212 38.0454 11.9495 41.174C9.82031 42.1433 7.74798 43.2326 5.82425 44.5697C4.23386 45.6749 2.88443 47.0187 2.00624 48.7755C1.62604 49.5363 1.37169 50.3364 1.2512 51.1772C1.21974 51.3944 1.14812 51.527 0.894436 51.5096C0.635395 51.4917 0.551725 51.3524 0.550387 51.1166C0.545032 50.2458 0.769936 49.4337 1.12536 48.6423C1.97746 46.7455 3.37641 45.3365 5.05851 44.1626C7.75668 42.2799 10.7052 40.8655 13.722 39.5844C22.6693 35.785 31.8977 32.8603 41.3979 30.7784C45.5887 29.8603 49.8057 29.0862 54.0467 28.44C54.2442 28.41 54.4115 28.1741 54.6077 28.1488C54.7944 28.1248 55.0093 28.3234 55.196 28.3007C56.5568 28.1355 57.9123 27.9323 59.2717 27.7544C60.2885 27.6218 61.3092 27.5192 62.3247 27.3787C62.5402 27.3487 62.7798 27.2528 62.9411 27.1122C63.9592 26.2248 65.0054 25.3807 66.2397 24.8018C66.8482 24.5173 67.4814 24.3114 68.1661 24.3128C68.8516 24.3141 69.2425 24.7025 69.1655 25.3834C69.1153 25.8291 68.9721 26.2641 68.8663 26.7211C69.4801 26.6705 70.1113 26.6145 70.7432 26.5672C73.3563 26.3727 75.9682 26.1575 78.584 25.9949C81.7233 25.7997 84.8639 25.6352 88.0059 25.4866C90.5461 25.3667 93.0883 25.2748 95.6299 25.1975C98.5175 25.1095 101.406 25.0476 104.295 24.9836C104.638 24.9763 104.983 25.0196 105.326 25.0529C105.434 25.0636 105.557 25.0929 105.639 25.1568C105.745 25.2395 105.816 25.3654 105.902 25.4726C105.8 25.5419 105.706 25.6525 105.595 25.6732C105.278 25.7325 104.955 25.7764 104.634 25.7878C100.007 25.9503 95.3802 26.0796 90.7549 26.2721C86.2642 26.4593 81.7742 26.6811 77.2875 26.9443C74.4829 27.1089 71.685 27.3847 68.8824 27.5919C68.5035 27.6198 68.3107 27.7684 68.1313 28.0982C66.8355 30.4759 65.2518 32.6644 63.5904 34.7963C59.9043 39.5251 55.9075 43.9721 51.4081 47.9554C50.9248 48.3831 50.4148 48.7808 49.9329 49.2099C49.7829 49.3438 49.641 49.519 49.5701 49.7035C48.8391 51.6023 48.3271 53.5649 47.8826 55.5462C47.8686 55.6095 47.8692 55.6762 47.8552 55.8287C47.9904 55.6988 48.0734 55.6215 48.1544 55.5416C49.979 53.7295 51.8225 51.9367 53.8419 50.3364C54.2415 50.02 54.6773 49.7455 55.1097 49.473C55.8018 49.0367 56.7235 49.6176 56.7777 50.3158C56.8051 50.6682 56.7931 51.024 56.8045 51.3784C56.8286 52.1412 56.7824 52.9154 56.9022 53.6629C57.0481 54.5716 57.6485 55.0279 58.5729 55.1065C59.8614 55.2171 61.1038 54.954 62.3293 54.6022C64.9552 53.8487 67.4031 52.6775 69.8114 51.4164C70.3436 51.1379 70.8703 50.8474 71.3931 50.5503C72.0103 50.1992 72.5993 49.8248 73.1368 49.3385C74.2874 48.2972 75.7232 47.8428 77.2406 47.6429C78.2186 47.5144 79.1998 47.4804 80.1577 47.7802C80.4087 47.8588 80.661 47.972 80.8746 48.1233C81.2782 48.4091 81.3324 48.8421 80.9709 49.1746C80.6831 49.4397 80.3364 49.6716 79.9756 49.8241C78.59 50.4091 77.1255 50.6176 75.6295 50.5923C75.0411 50.5823 74.4541 50.489 73.8651 50.4597C73.7405 50.4537 73.5598 50.5263 73.4909 50.6229C72.8035 51.5849 73.021 52.4124 74.0886 52.93C74.8845 53.3164 75.748 53.4277 76.6154 53.5056C79.3819 53.7541 82.0252 53.1798 84.6209 52.3031C86.8225 51.5589 88.9149 50.5763 90.931 49.4277C91.0167 49.3791 91.0976 49.3211 91.1786 49.2692C90.9477 48.7802 90.9872 48.4637 91.3781 48.09C91.9658 47.5283 92.6787 47.2032 93.4846 47.092C93.6211 47.0733 93.7952 47.0833 93.9023 47.1546C94.0662 47.2639 94.2563 47.4211 94.2978 47.591C94.3206 47.6829 94.0803 47.8941 93.9203 47.9654C93.352 48.2172 92.8433 48.5423 92.3949 49.024C92.6887 49.1706 92.9826 49.2925 93.2503 49.457C93.6559 49.7069 94.0703 49.956 94.4317 50.2625C94.8501 50.6163 94.8628 50.9001 94.5301 51.3311C94.1499 51.8241 93.7162 52.2771 93.3554 52.7828C93.0816 53.1665 92.8313 53.5849 92.6686 54.0246C92.4899 54.5056 92.6793 54.8267 93.1894 54.896C93.7463 54.972 94.3253 54.9906 94.8835 54.93C96.8688 54.7135 98.7511 54.0832 100.617 53.409C103.74 52.2791 106.762 50.9147 109.734 49.4397C110.579 49.02 111.383 48.507 112.249 48.1393C113.673 47.5343 115.165 47.1539 116.733 47.2485C117.126 47.2719 117.514 47.4084 117.901 47.5057C118.005 47.5323 118.106 47.595 118.195 47.6596C118.389 47.8008 118.592 47.9774 118.486 48.2352C118.374 48.507 118.097 48.4164 117.895 48.3618C117.314 48.2046 116.741 48.0247 116.124 48.1013C114.034 48.3618 112.117 49.05 110.479 50.3957C109.802 50.952 109.296 51.6362 109.234 52.5576C109.194 53.1499 109.354 53.2944 109.951 53.2178C110.903 53.0959 111.7 52.6316 112.442 52.0726C113.189 51.5103 113.891 50.8894 114.638 50.3271C115.241 49.8734 115.863 49.4384 116.512 49.0553C116.827 48.8694 117.219 48.7962 117.586 48.7215C117.741 48.6896 117.94 48.7522 118.089 48.8295C118.417 48.9974 118.401 49.0606 118.178 49.3385C117.776 49.8401 117.353 50.3331 117.016 50.8774C116.418 51.8448 116.676 52.6056 117.738 53.0326C118.964 53.5256 120.258 53.6022 121.555 53.4643C123.926 53.2118 126.169 52.451 128.375 51.6056C130.297 50.8694 132.18 50.0346 134.079 49.2392C134.242 49.1706 134.403 49.0886 134.548 48.9874C134.797 48.8135 135.015 48.9034 135.224 49.044C135.453 49.1972 135.309 49.3731 135.233 49.5403C133.892 52.5016 132.594 55.481 131.519 58.5509C131.479 58.6641 131.445 58.7787 131.403 58.9106L131.402 58.9093ZM67.2371 27.7957C67.0229 27.7957 66.9151 27.7864 66.8094 27.7971C65.8448 27.895 64.8823 28.0136 63.9164 28.0882C63.5523 28.1162 63.3033 28.2634 63.0603 28.5179C57.8567 33.9635 53.7589 40.1427 50.6571 46.986C50.623 47.062 50.5969 47.1413 50.5674 47.2192L50.637 47.2652C56.9296 41.4531 62.5697 35.0908 67.2377 27.7964L67.2371 27.7957ZM163.314 56.9266C161.693 57.451 160.105 58.0279 158.67 58.9326C158.092 59.297 157.552 59.7381 157.052 60.2044C156.535 60.6874 156.234 61.3097 156.252 62.0412C156.262 62.4476 156.403 62.5748 156.807 62.5761C157.549 62.5788 158.198 62.2917 158.799 61.8973C160.731 60.6295 162.049 58.804 163.314 56.9266ZM80.0921 48.6363C79.1249 47.8814 75.2834 48.7355 74.2265 49.8887C75.0224 50.0287 75.8055 50 76.5873 49.9047C77.6081 49.7802 78.6014 49.5483 79.5164 49.0613C79.7192 48.9534 79.8906 48.7875 80.0921 48.6363ZM141.571 52.962C140.732 53.1445 139.949 53.435 139.251 53.9253C138.797 54.2438 138.427 54.6382 138.209 55.1545C138.018 55.6069 137.953 56.0752 138.038 56.6468C139.638 55.7488 140.581 54.3364 141.571 52.962ZM68.371 24.8057C67.4285 24.7411 65.0208 26.5399 64.6192 27.1328C65.6079 27.0369 66.5831 26.9443 67.5577 26.8444C67.6246 26.8377 67.7183 26.7897 67.7451 26.7344C68.041 26.1295 68.3516 25.5273 68.371 24.8057Z"
        fill="#269431"
        stroke="#269431"
        strokeWidth="0.915343"
      />
    </svg>
  )
}