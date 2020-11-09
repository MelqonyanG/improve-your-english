from bs4 import BeautifulSoup
import requests
import os
import urllib

ROOT = os.path.dirname(os.path.realpath(__file__))
url = "https://learnenglish.britishcouncil.org/skills/listening"
page = requests.get(url)

soup = BeautifulSoup(page.content, 'html.parser')
results = soup.findAll('div', class_='views-field views-field-nothing')
for result in results:
    level_a = result.find('a')
    level_href = level_a['href'].split("/")[-1]
    level = level_href.split("-")[-1].title()
    print(level)
    if level == 'A1':
        continue
    os.mkdir(os.path.join(ROOT, level))
    os.mkdir(os.path.join(ROOT, level, 'images'))
    os.mkdir(os.path.join(ROOT, level, 'recordings'))
    os.mkdir(os.path.join(ROOT, level, 'texts'))

    level_url = os.path.join(url, level_href)

    level_page = requests.get(level_url)
    level_soup = BeautifulSoup(level_page.content, 'html.parser')
    level_results = level_soup.findAll('div', class_='views-field views-field-path')
    for level_result in level_results:
        topic_a = level_result.find('a')
        if not topic_a:
            continue
        topic_href = topic_a['href'].split("/")[-1]
        topic = topic_href.split("-")[-1].title()
        topic_url = os.path.join(url, level_href, topic_href)

        topic_page = requests.get(topic_url)
        topic_soup = BeautifulSoup(topic_page.content, 'html.parser')
        topic_img = topic_soup.find('div', class_='field field-name-field-image field-type-image field-label-hidden')
        topic_img_url = topic_img.find('img')['src']
        topic_title = topic_soup.find('h1', class_='page__title title').text
        topic_audio = topic_soup.find('div', class_='field field-name-field-audio-upload field-type-file field-label-hidden')
        topic_audio_url = topic_audio.find('audio')['src']
        topic_text_div = topic_soup.find('div', class_='field field-name-field-tapescript field-type-text-long field-label-hidden')\
            .find('div', class_="field-item even").findAll('p')

        topic_text = ""
        for p in topic_text_div:
            strongs = p.findAll('strong')
            txt = p.text
            for s in strongs:
                txt = txt.replace(s.text + ": ", '')
            topic_text += txt + "\n"

        print(topic_title)
        url_name = topic_title.lower().replace(" ", "_")
        image_path = os.path.join(ROOT, level, 'images', url_name + '.jpg')
        recording_path = os.path.join(ROOT, level, 'recordings', url_name + '.mp3')
        txt_path = os.path.join(ROOT, level, 'texts', url_name + '.txt')
        urllib.request.urlretrieve(topic_audio_url.replace(' ', '%20'), recording_path)
        urllib.request.urlretrieve(topic_img_url.replace(' ', '%20'), image_path)
        with open(txt_path, 'w+') as f:
            f.write(topic_text)


