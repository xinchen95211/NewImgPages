<template>

  <div class="common-layout">

    <el-container>
     <tabs-vips @handleSelect="handleSelect" @handleSearch="handleSearch"></tabs-vips>
      <el-main><photo-card ref="photoCard" :imglist="imgList" @selectItem="selectItem" ></photo-card></el-main>
      <el-footer class="centers"> <paglina-tion :totalCount="totalCount" :currentPage="currentPage" @pageTurning="pageTurning"></paglina-tion></el-footer>
    </el-container>


</div>




</template>

<script>
import PhotoCard from '@/components/PhotoCard'
import TabsVips from  '@/components/TabsVips'
import PaglinaTion from  '@/components/PaginaTion'
import axios from "axios";

export default {
  name: "PhotoMain",
  data(){
    return{
      //图片数据
      imgList: [
        {
          "id": "1637708053818863617",
          "name": "[Ugirls爱尤物]No.1000_嫩模阿依努尔瓦娅性感空姐制服秀豪乳翘臀完美诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1000_%E5%AB%A9%E6%A8%A1%E9%98%BF%E4%BE%9D%E5%8A%AA%E5%B0%94%E7%93%A6%E5%A8%85%E6%80%A7%E6%84%9F%E7%A9%BA%E5%A7%90%E5%88%B6%E6%9C%8D%E7%A7%80%E8%B1%AA%E4%B9%B3%E7%BF%98%E8%87%80%E5%AE%8C%E7%BE%8E%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0191258537.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054246682626",
          "name": "[Ugirls爱尤物]No.1001_嫩模栗子纯情情人节性感情趣内衣秀美乳翘臀火辣诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1001_%E5%AB%A9%E6%A8%A1%E6%A0%97%E5%AD%90%E7%BA%AF%E6%83%85%E6%83%85%E4%BA%BA%E8%8A%82%E6%80%A7%E6%84%9F%E6%83%85%E8%B6%A3%E5%86%85%E8%A1%A3%E7%A7%80%E7%BE%8E%E4%B9%B3%E7%BF%98%E8%87%80%E7%81%AB%E8%BE%A3%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0891724156.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054359928834",
          "name": "[Ugirls爱尤物]No.1002_嫩模纯小希新春福利红色镂空蕾丝内衣配红丝腿袜诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1002_%E5%AB%A9%E6%A8%A1%E7%BA%AF%E5%B0%8F%E5%B8%8C%E6%96%B0%E6%98%A5%E7%A6%8F%E5%88%A9%E7%BA%A2%E8%89%B2%E9%95%82%E7%A9%BA%E8%95%BE%E4%B8%9D%E5%86%85%E8%A1%A3%E9%85%8D%E7%BA%A2%E4%B8%9D%E8%85%BF%E8%A2%9C%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0992243253.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054422843393",
          "name": "[Ugirls爱尤物]No.1003_性感尤物美女网携两位嫩模小琪＆安柔给您拜年啦！",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1003_%E6%80%A7%E6%84%9F%E5%B0%A4%E7%89%A9%E7%BE%8E%E5%A5%B3%E7%BD%91%E6%90%BA%E4%B8%A4%E4%BD%8D%E5%AB%A9%E6%A8%A1%E5%B0%8F%E7%90%AA%EF%BC%86%E5%AE%89%E6%9F%94%E7%BB%99%E6%82%A8%E6%8B%9C%E5%B9%B4%E5%95%A6%EF%BC%81/009280374.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054485757953",
          "name": "[Ugirls爱尤物]No.1004_爱尤物新春特辑爱菲等七大美女嫩模新春福利性感写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1004_%E7%88%B1%E5%B0%A4%E7%89%A9%E6%96%B0%E6%98%A5%E7%89%B9%E8%BE%91%E7%88%B1%E8%8F%B2%E7%AD%89%E4%B8%83%E5%A4%A7%E7%BE%8E%E5%A5%B3%E5%AB%A9%E6%A8%A1%E6%96%B0%E6%98%A5%E7%A6%8F%E5%88%A9%E6%80%A7%E6%84%9F%E5%86%99%E7%9C%9F40P/08162337226.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054586421249",
          "name": "[Ugirls爱尤物]No.1005_大年初三阿依努尔瓦娅等10大嫩模庆春特辑喜庆红写真41P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1005_%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%89%E9%98%BF%E4%BE%9D%E5%8A%AA%E5%B0%94%E7%93%A6%E5%A8%85%E7%AD%8910%E5%A4%A7%E5%AB%A9%E6%A8%A1%E5%BA%86%E6%98%A5%E7%89%B9%E8%BE%91%E5%96%9C%E5%BA%86%E7%BA%A2%E5%86%99%E7%9C%9F41P/09162841386.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054657724418",
          "name": "[Ugirls爱尤物]No.1006_嫩模刘小美居家私房内衣系列秀完美曲线豪乳翘臀诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1006_%E5%AB%A9%E6%A8%A1%E5%88%98%E5%B0%8F%E7%BE%8E%E5%B1%85%E5%AE%B6%E7%A7%81%E6%88%BF%E5%86%85%E8%A1%A3%E7%B3%BB%E5%88%97%E7%A7%80%E5%AE%8C%E7%BE%8E%E6%9B%B2%E7%BA%BF%E8%B1%AA%E4%B9%B3%E7%BF%98%E8%87%80%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/05163245816.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054716444673",
          "name": "[Ugirls爱尤物]No.1007_嫩模凯竹私房红色蕾丝情趣内衣秀完美身材傲人美乳诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1007_%E5%AB%A9%E6%A8%A1%E5%87%AF%E7%AB%B9%E7%A7%81%E6%88%BF%E7%BA%A2%E8%89%B2%E8%95%BE%E4%B8%9D%E6%83%85%E8%B6%A3%E5%86%85%E8%A1%A3%E7%A7%80%E5%AE%8C%E7%BE%8E%E8%BA%AB%E6%9D%90%E5%82%B2%E4%BA%BA%E7%BE%8E%E4%B9%B3%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0322835722.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054783553537",
          "name": "[Ugirls爱尤物]No.1008_嫩模李焮苒白色连体泳装+黑色缕空女警制服完美诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1008_%E5%AB%A9%E6%A8%A1%E6%9D%8E%E7%84%AE%E8%8B%92%E7%99%BD%E8%89%B2%E8%BF%9E%E4%BD%93%E6%B3%B3%E8%A3%85%2B%E9%BB%91%E8%89%B2%E7%BC%95%E7%A9%BA%E5%A5%B3%E8%AD%A6%E5%88%B6%E6%9C%8D%E5%AE%8C%E7%BE%8E%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/201802218279001.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054884216834",
          "name": "[Ugirls爱尤物]No.1009_嫩模纳兰居家私房白色蕾丝内衣缕空秀完美身材豪乳诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1009_%E5%AB%A9%E6%A8%A1%E7%BA%B3%E5%85%B0%E5%B1%85%E5%AE%B6%E7%A7%81%E6%88%BF%E7%99%BD%E8%89%B2%E8%95%BE%E4%B8%9D%E5%86%85%E8%A1%A3%E7%BC%95%E7%A9%BA%E7%A7%80%E5%AE%8C%E7%BE%8E%E8%BA%AB%E6%9D%90%E8%B1%AA%E4%B9%B3%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0023169275.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708054955520001",
          "name": "[Ugirls爱尤物]No.1010_嫩模龙儿居家私房金黄色吊带睡衣低胸露美乳完美身材写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1010_%E5%AB%A9%E6%A8%A1%E9%BE%99%E5%84%BF%E5%B1%85%E5%AE%B6%E7%A7%81%E6%88%BF%E9%87%91%E9%BB%84%E8%89%B2%E5%90%8A%E5%B8%A6%E7%9D%A1%E8%A1%A3%E4%BD%8E%E8%83%B8%E9%9C%B2%E7%BE%8E%E4%B9%B3%E5%AE%8C%E7%BE%8E%E8%BA%AB%E6%9D%90%E5%86%99%E7%9C%9F40P/0314516678.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055077154817",
          "name": "[Ugirls爱尤物]No.1011_女神杨晨晨居家脱牛仔热裤秀半透内裤迷人翘臀诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1011_%E5%A5%B3%E7%A5%9E%E6%9D%A8%E6%99%A8%E6%99%A8%E5%B1%85%E5%AE%B6%E8%84%B1%E7%89%9B%E4%BB%94%E7%83%AD%E8%A3%A4%E7%A7%80%E5%8D%8A%E9%80%8F%E5%86%85%E8%A3%A4%E8%BF%B7%E4%BA%BA%E7%BF%98%E8%87%80%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0214141188.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055148457986",
          "name": "[Ugirls爱尤物]No.1012_嫩模张多多粉色低胸吊带内衣配白色丁字裤完美诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1012_%E5%AB%A9%E6%A8%A1%E5%BC%A0%E5%A4%9A%E5%A4%9A%E7%B2%89%E8%89%B2%E4%BD%8E%E8%83%B8%E5%90%8A%E5%B8%A6%E5%86%85%E8%A1%A3%E9%85%8D%E7%99%BD%E8%89%B2%E4%B8%81%E5%AD%97%E8%A3%A4%E5%AE%8C%E7%BE%8E%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0F142725169.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055244926978",
          "name": "[Ugirls爱尤物]No.1013_嫩模夏梓诺居家丝质开衫秀豹纹边内衣野性火辣诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1013_%E5%AB%A9%E6%A8%A1%E5%A4%8F%E6%A2%93%E8%AF%BA%E5%B1%85%E5%AE%B6%E4%B8%9D%E8%B4%A8%E5%BC%80%E8%A1%AB%E7%A7%80%E8%B1%B9%E7%BA%B9%E8%BE%B9%E5%86%85%E8%A1%A3%E9%87%8E%E6%80%A7%E7%81%AB%E8%BE%A3%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/03225422501.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055312035842",
          "name": "[Ugirls爱尤物]No.1014_嫩模小凡居家白色缕空睡衣+性感毛衣半露豪乳诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1014_%E5%AB%A9%E6%A8%A1%E5%B0%8F%E5%87%A1%E5%B1%85%E5%AE%B6%E7%99%BD%E8%89%B2%E7%BC%95%E7%A9%BA%E7%9D%A1%E8%A1%A3%2B%E6%80%A7%E6%84%9F%E6%AF%9B%E8%A1%A3%E5%8D%8A%E9%9C%B2%E8%B1%AA%E4%B9%B3%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0A225831374.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055370756097",
          "name": "[Ugirls爱尤物]No.1015_嫩模韩乐优白衬衣下性感黑色内衣+黑色情趣丝袜诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1015_%E5%AB%A9%E6%A8%A1%E9%9F%A9%E4%B9%90%E4%BC%98%E7%99%BD%E8%A1%AC%E8%A1%A3%E4%B8%8B%E6%80%A7%E6%84%9F%E9%BB%91%E8%89%B2%E5%86%85%E8%A1%A3%2B%E9%BB%91%E8%89%B2%E6%83%85%E8%B6%A3%E4%B8%9D%E8%A2%9C%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0219341801.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055437864962",
          "name": "[Ugirls爱尤物]No.1016_嫩模林美珊居家私房粉色连身裙半脱手档豪乳喷血诱惑写真39P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1016_%E5%AB%A9%E6%A8%A1%E6%9E%97%E7%BE%8E%E7%8F%8A%E5%B1%85%E5%AE%B6%E7%A7%81%E6%88%BF%E7%B2%89%E8%89%B2%E8%BF%9E%E8%BA%AB%E8%A3%99%E5%8D%8A%E8%84%B1%E6%89%8B%E6%A1%A3%E8%B1%AA%E4%B9%B3%E5%96%B7%E8%A1%80%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F39P/06111710389.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055572082690",
          "name": "[Ugirls爱尤物]No.1017_嫩模Jona居家私房内衣系列秀完美曲线豪乳翘臀诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1017_%E5%AB%A9%E6%A8%A1Jona%E5%B1%85%E5%AE%B6%E7%A7%81%E6%88%BF%E5%86%85%E8%A1%A3%E7%B3%BB%E5%88%97%E7%A7%80%E5%AE%8C%E7%BE%8E%E6%9B%B2%E7%BA%BF%E8%B1%AA%E4%B9%B3%E7%BF%98%E8%87%80%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/00112111571.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055697911810",
          "name": "[Ugirls爱尤物]No.1018_嫩模韩恩熙性感白衬衣配红色内裤无内真空露豪乳诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1018_%E5%AB%A9%E6%A8%A1%E9%9F%A9%E6%81%A9%E7%86%99%E6%80%A7%E6%84%9F%E7%99%BD%E8%A1%AC%E8%A1%A3%E9%85%8D%E7%BA%A2%E8%89%B2%E5%86%85%E8%A3%A4%E6%97%A0%E5%86%85%E7%9C%9F%E7%A9%BA%E9%9C%B2%E8%B1%AA%E4%B9%B3%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/08192330339.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055752437762",
          "name": "[Ugirls爱尤物]No.1019_嫩模Tracy居家真空衬衣+黑色羽毛内衣爆乳喷血诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1019_%E5%AB%A9%E6%A8%A1Tracy%E5%B1%85%E5%AE%B6%E7%9C%9F%E7%A9%BA%E8%A1%AC%E8%A1%A3%2B%E9%BB%91%E8%89%B2%E7%BE%BD%E6%AF%9B%E5%86%85%E8%A1%A3%E7%88%86%E4%B9%B3%E5%96%B7%E8%A1%80%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/0F14634959.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055832129537",
          "name": "[Ugirls爱尤物]No.1020_嫩模Yina白色连体内衣+灰色蕾丝连体内衣缕空透视诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1020_%E5%AB%A9%E6%A8%A1Yina%E7%99%BD%E8%89%B2%E8%BF%9E%E4%BD%93%E5%86%85%E8%A1%A3%2B%E7%81%B0%E8%89%B2%E8%95%BE%E4%B8%9D%E8%BF%9E%E4%BD%93%E5%86%85%E8%A1%A3%E7%BC%95%E7%A9%BA%E9%80%8F%E8%A7%86%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/1314124261.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708055949570050",
          "name": "[Ugirls爱尤物]No.1021_嫩模米奇黑色宽松毛衣+白色蕾丝连体情趣内衣完美诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1021_%E5%AB%A9%E6%A8%A1%E7%B1%B3%E5%A5%87%E9%BB%91%E8%89%B2%E5%AE%BD%E6%9D%BE%E6%AF%9B%E8%A1%A3%2B%E7%99%BD%E8%89%B2%E8%95%BE%E4%B8%9D%E8%BF%9E%E4%BD%93%E6%83%85%E8%B6%A3%E5%86%85%E8%A1%A3%E5%AE%8C%E7%BE%8E%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/03141958916.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708056096370690",
          "name": "[Ugirls爱尤物]No.1022_嫩模颜亦汐浴室里黑色蕾丝薄纱配黑色内衣半露美乳诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1022_%E5%AB%A9%E6%A8%A1%E9%A2%9C%E4%BA%A6%E6%B1%90%E6%B5%B4%E5%AE%A4%E9%87%8C%E9%BB%91%E8%89%B2%E8%95%BE%E4%B8%9D%E8%96%84%E7%BA%B1%E9%85%8D%E9%BB%91%E8%89%B2%E5%86%85%E8%A1%A3%E5%8D%8A%E9%9C%B2%E7%BE%8E%E4%B9%B3%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/02214529527.jpg",
          "table_name": "Aiyouwu",
          "json": null
        },
        {
          "id": "1637708056171868161",
          "name": "[Ugirls爱尤物]No.1023_嫩模Zora若拉粉色真空毛衣+性感红色内衣爆乳诱惑写真40P",
          "thumbnail": "https://yaoyao.dynv6.net/onedriveyaoyao/jpmn/Aiyouwu/%5BUgirls%E7%88%B1%E5%B0%A4%E7%89%A9%5DNo.1023_%E5%AB%A9%E6%A8%A1Zora%E8%8B%A5%E6%8B%89%E7%B2%89%E8%89%B2%E7%9C%9F%E7%A9%BA%E6%AF%9B%E8%A1%A3%2B%E6%80%A7%E6%84%9F%E7%BA%A2%E8%89%B2%E5%86%85%E8%A1%A3%E7%88%86%E4%B9%B3%E8%AF%B1%E6%83%91%E5%86%99%E7%9C%9F40P/16222859991.jpg",
          "table_name": "Aiyouwu",
          "json": null
        }
      ],
      //当前分类
      tableName:'Aiyouwu',
      //当前页码
      currentPage: 1,
      //搜索内容
      search:'',
      //总页数

      //总数据
      totalCount: 2162,
      loading:[]
    }
  },
  methods:{
    selectItem(id){
      this.$router.push('/show/'+ id)
    },
    //图片加载
    imgListLoad(){
      this.imgList = []
      this.$refs.photoCard.clearLoading();
      axios.post("https://vernelproxy.dynv6.net/proxy/frp-oak.top:14850/photo", {
        "tables": this.tableName,
        "search": this.search,
        "row": this.currentPage
      }).then(res => {
        this.imgList = res.data.records;
        this.totalCount = res.data.total;
        this.currentPage = res.data.current;
      }).catch(error => {
            console.log("error" + error)
      }
      )
    },
    //翻页逻辑
    pageTurning(e){
      this.currentPage = e;
    },
    //切换分类逻辑
    handleSelect(item){
      this.currentPage = 1;
      this.tableName = item
    },
    //搜索逻辑
    handleSearch(e){
      this.currentPage = 1;
      this.search = e
    }
  },

  components: {
    PhotoCard,
    TabsVips,
    PaglinaTion
  },
  //数据监听
  watch:{
    tableName(){this.imgListLoad()},
    search(){this.imgListLoad()},
    currentPage(){this.imgListLoad()},
  }

}
</script>

<style scoped>
.centers{
  margin: 0 auto;
}

.darks{
  background-color: black;
}
</style>
