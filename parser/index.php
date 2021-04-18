<?php

require '../../vendor/autoload.php';

$db = new MysqliDb('localhost','','','');


$city = $db->get("city");

foreach ($city as $url_key => $url_val) {

$url_value = "http://bridge.webjox.ru/?action=display&bridge=XPath&url=https%3A%2F%2Frostov.hh.ru%2Fsearch%2Fvacancy%3Fst%3DsearchVacancy%26text%3D%25D0%25BF%25D1%2580%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D0%25BC%25D0%25BC%25D0%25B8%25D1%2581%25D1%2582%26search_field%3Dname%26search_field%3Ddescription%26area%3D".$url_val['hh_id']."%26salary%3D%26currency_code%3DRUR%26experience%3DdoesNotMatter%26order_by%3Drelevance%26search_period%3D0%26items_on_page%3D100%26no_magic%3Dtrue%26L_save_area%3Dtrue&item=%2Fhtml%2Fbody%2Fdiv%5B6%5D%2Fdiv%2Fdiv%5B1%5D%2Fdiv%5B3%5D%2Fdiv%2Fdiv%2Fdiv%5B2%5D%2Fdiv%5B2%5D%2Fdiv%2Fdiv%5B3%5D%2Fdiv%2Fdiv&title=.%2F%2Fa%5B%40class%3D%22bloko-link%22%5D&content=.%2F%2Fdiv%5B%40class%3D%22g-user-content%22%5D&uri=.%2F%2Fa%5B%40class%3D%22bloko-link%22%5D%2F%40href&author=&timestamp=.%2F%2Ftime%5B%40class%3D%22ArticleListItem-footerTimestamp%22%5D%2F%40timestamp&enclosures=.%2F%2Fdiv%5B%40class%3D%22ArticleListItem-image%22%5D%2F%40style&categories=.%2F%2Fdiv%5B%40class%3D%22vacancy-serp-item__meta-info%22%5D&_cache_timeout=1&format=Mrss";



$start_link = microtime(true);
$reader = new XMLReader();
if (!$reader->open($url_value)) {
echo ("Failed to open ".$url_value); continue;
}


while ($reader->read()):

if ($reader->nodeType == XMLReader::ELEMENT && $reader->name == 'item'){
    
        $xml = simplexml_load_string($reader->readOuterXML());
        $title = (string)$xml->title;
        if (!$title) continue;
        $link = (string)$xml->link;
        $description = (string)$xml->description;
        $category = (string)$xml->category;
        //$pubDate = (string)$xml->pubDate;
        if(!$description) $description = $xml->children('http://purl.org/rss/1.0/modules/content/')->encoded;
        $author = (string)$xml->contributor;
        

    $data_text = Array (
        'url' => ''.$link.'',
        'vac_name' => $title?$title:'',
        'city' => ''.$url_val['hh_id'].'',
        'org' => $category?$category:'',
        'date' => ''.strtotime($pubDate).'',
    );
    $id = $db->insert ('vacancy', $data_text);
   
 

        $reader->next('item');

}


endwhile;



}



foreach ($city as $url_key => $url_val) {
    
$url_value = "http://bridge.webjox.ru/?action=display&bridge=XPath&url=https%3A%2F%2Frostov.hh.ru%2Fsearch%2Fresume%3Farea%3D76%26relocation%3Dliving_or_relocation%26exp_period%3Dall_time%26logic%3Dnormal%26no_magic%3Dfalse%26order_by%3Drelevance%26ored_clusters%3Dtrue%26pos%3Dfull_text%26text%3D%25D0%25BF%25D1%2580%25D0%25BE%25D0%25B3%25D1%2580%25D0%25B0%25D0%25BC%25D0%25BC%25D0%25B8%25D1%2581%25D1%2582%26items_on_page%3D100&item=%2F%2Fdiv%5B%40data-qa%3D%22resume-serp__resume%22%5D&title=.%2F%2Fa%5B%40class%3D%22resume-search-item__name%22%5D&content=.%2F%2Fdiv%5B%40class%3D%22bloko-text-emphasis%22%5D&uri=.%2F%2Fa%5B%40class%3D%22resume-search-item__name%22%5D%2F%40href&author=&timestamp=.%2F%2Ftime%5B%40class%3D%22ArticleListItem-footerTimestamp%22%5D%2F%40timestamp&enclosures=.%2F%2Fdiv%5B%40class%3D%22ArticleListItem-image%22%5D%2F%40style&categories=.%2F%2Fdiv%5B%40class%3D%22ArticleListItem-label%22%5D&_cache_timeout=1&format=Mrss";


$start_link = microtime(true);
$reader = new XMLReader();
if (!$reader->open($url_value)) {
echo ("Failed to open ".$url_value); continue;
}


while ($reader->read()):

if ($reader->nodeType == XMLReader::ELEMENT && $reader->name == 'item'){
    
        $xml = simplexml_load_string($reader->readOuterXML());
        $title = (string)$xml->title;
        if (!$title) continue;
        $link = (string)$xml->link;
        $description = (string)$xml->description;
        $category = (string)$xml->category;
        //$pubDate = (string)$xml->pubDate;
        if(!$description) $description = $xml->children('http://purl.org/rss/1.0/modules/content/')->encoded;
        $author = (string)$xml->contributor;
        

    $data_text = Array (
        'url' => ''.$link.'',
        'cv_name' => $title?$title:'',
        'city' => ''.$url_val['hh_id'].'',
        'date' => ''.strtotime($pubDate).'',
    );
    $id = $db->insert ('cv', $data_text);


        $reader->next('item');

}


endwhile;



}



?>