from urllib.parse import urljoin

from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import json

import  psycopg2
from psycopg2.extras import RealDictCursor
from  config import host, user, password, db_name

from bs4 import BeautifulSoup









def get_products_siti():
    listitems = []



    connection = psycopg2.connect(
    host=host,
    user=user,
    password=password,
    database=db_name
    )
    print('connectAddTodo')



    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors-spki-list')
    options.add_argument('--ignore-ssl-errors')

    driver = webdriver.Chrome(executable_path="E:\pr1\client\server\chromedriver (6).exe", chrome_options=options)
    driver1 = webdriver.Chrome(executable_path="E:\pr1\client\server\chromedriver (6).exe", chrome_options=options)


    # driver.get("https://www.citilink.ru/catalog/videokarty/?view_type=list")
    # elems = driver.find_elements(By.CLASS_NAME, "product_data__gtm-js ")
    # for elem in elems:
    #     name = elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__title ")
    #     price='none'
    #     if elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__price_current-price "):          
    #             price =  elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__price_current-price ")
    #     link = name.get_attribute('href')
    #     image = elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__picture-hover_part ").get_attribute('data-src')
    #     # описание = elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__properties").find_elements(By.CLASS_NAME, "ProductCardHorizontal__properties_value")

    #     driver1.get(link+'properties/')
    #     elems1= driver1.find_elements(By.CLASS_NAME, 'Specifications__row')


    #     Видеочипсет = '0'
    #     Память='0'
    #     Частота='0'
    #     Интерфейс='0'

    #     ЧастотаПамяти='0'
    #     Техпроцесс='0'
    #     ТипПамяти='0'
    #     РазрядностьШиныПамяти='0'


    #     for elem1 in elems1:
    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Видеочипсет':          
    #             Видеочипсет = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                

    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Объем видеопамяти':          
    #             Память = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                

    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Частота графического процессора':          
    #             Частота = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                

    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Интерфейс':          
    #             Интерфейс = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                

    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Частота видеопамяти':          
    #             ЧастотаПамяти = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                

    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Техпроцесс':          
    #             Техпроцесс = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                

    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Тип видеопамяти':          
    #             ТипПамяти = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                

    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Разрядность шины видеопамяти':          
    #             РазрядностьШиныПамяти = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            
            

    #     obj={'store':'Ситилинк','type':'Видеокарта','name':name.text.replace('Видеокарта ', ''), 'price':price.text.replace(' ', '').replace('₽', ''), 'link':link,
    #     'cpu':{
    #     # Видеочипсет
    #     'par1':Видеочипсет,
    #     # Память    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    #     'par2':Память.replace(' ГБ', ''),
    #      # Частота    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    #     'par8':Частота.replace('(', '').partition('МГц')[0],
    #     # Интерфейс
    #     'par3':Интерфейс,
    #     'ЧастотаПамяти':ЧастотаПамяти.replace(' МГц', ''),
    #     'Техпроцесс':Техпроцесс.replace(' нм', ''),
    #     'ТипПамяти':ТипПамяти,
    #     'РазрядностьШиныПамяти':РазрядностьШиныПамяти.replace(' bit', ''),
    #     }, 'image':image
    #     }
    #     print(obj)
    #     listitems.append(obj)
    
    #     with connection.cursor() as cursor:
    #         store=     'SITILINK',
    #         types= 'Видеокарта',
    #         name= name.text.replace('Видеокарта ', ''),
    #         price= price.text.replace(' ', '').replace('₽', ''),
    #         link= link,
    #         videochipset= Видеочипсет,
    #         memory= Память.replace(' ГБ', ''),
    #         frequency= Частота.replace('(', '').partition('МГц')[0],
    #         interface= Интерфейс,
    #         frequencyMemory= ЧастотаПамяти.replace(' МГц', ''),
    #         processTechnology= Техпроцесс.replace(' нм', ''),
    #         MemoryBusWidth= РазрядностьШиныПамяти.replace(' bit', ''),
    #         typeofmemory= ТипПамяти,
    #         image= image

    #         cursor.execute('INSERT INTO videokards (store, type, name, price, link, videochipset, memory, frequency, interface, frequencyMemory, processTechnology, MemoryBusWidth, typeofmemory, image) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s) RETURNING *;',(store,types,name,price,link,videochipset,memory,frequency,interface,frequencyMemory,processTechnology,MemoryBusWidth,typeofmemory,image))
    #         connection.commit()
    









    
    driver.get("https://www.citilink.ru/catalog/processory/?view_type=list")
    elems = driver.find_elements(By.CLASS_NAME, "product_data__gtm-js ")
    for elem in elems:
        name = elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__title ")
        price='none'
        if elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__price_current-price "):          
                price =  elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__price_current-price ")
       
        rouble = elem.find_element(By.CLASS_NAME, "ProductPrice__rouble ") 
        link = name.get_attribute('href')
        image = elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__picture-hover_part ").get_attribute('data-src')
        # описание = elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__properties").find_elements(By.CLASS_NAME, "ProductCardHorizontal__properties_value")
        
        
        driver1.get(link+'properties/')
        elems1= driver1.find_elements(By.CLASS_NAME, 'Specifications__row')


        Ядро = '0'
        Частота='0'
        Сокет='0'
        ЧислоПотоков='0'
        Тепловыделение ='0'
        МаксимальныйОбъемПамяти='none'
        ТипПамяти='0'
        

        КоличествоЯдер='0'
        КоличествоКаналов='0'
        Техпроцесс='0'
        ЧастотаГрафическогоЯдра='0 МГц'
        МодельГрафическогоЯдра='Отсутствует'
        ЧастотаПамяти='0'


        for elem1 in elems1:
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Ядро':          
                Ядро = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Частота':          
                Частота = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Гнездо процессора':          
                Сокет = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Количество потоков':          
                ЧислоПотоков = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Тепловыделение':          
                Тепловыделение = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Максимальный объем памяти':          
                МаксимальныйОбъемПамяти = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Тип памяти':          
                ТипПамяти = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Количество ядер':          
                КоличествоЯдер = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text

            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Количество каналов памяти':          
                КоличествоКаналов = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Технологический процесс':          
                Техпроцесс = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Частота графического ядра':          
                ЧастотаГрафическогоЯдра = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Модель графического ядра':          
                МодельГрафическогоЯдра = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
            if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Поддержка частот памяти':          
                ЧастотаПамяти = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
     
        obj={'store':'Ситилинк','type':'Процессор','name':name.text.replace('Процессор ', ''), 'price':price.text.replace(' ', ''), 'link':link,
        'cpu':{
        # Ядро
        'par1': Ядро,
        # Частота!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    
        'par2':Частота.partition(' ГГц')[0],            
        # нужно добавить режим турбо сверху
        # Сокет
        'par3':Сокет,
        # Число потоков!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        'par4':ЧислоПотоков,
        # Тепловыделение
        'par5':Тепловыделение.replace(' Вт', ''),
        'ТипПамяти':ТипПамяти,
        'МаксимальныйОбъемПамяти':МаксимальныйОбъемПамяти.replace(' ГБ', ''),
        'КоличествоЯдер':КоличествоЯдер,
        'КоличествоКаналов':КоличествоКаналов,
        'Техпроцесс':Техпроцесс.replace(' нм', ''),
        'ЧастотаГрафическогоЯдра':ЧастотаГрафическогоЯдра.partition('МГц')[0],            
        # нужно добавить режим турбо сверху
        'МодельГрафическогоЯдра':МодельГрафическогоЯдра,
        'ЧастотаПамяти':ЧастотаПамяти,
        }, 'image':image
        }
        listitems.append(obj)
        with connection.cursor() as cursor:
            store=     'SITILINK', 
            types= 'Процессор',
            name= name.text.replace('Процессор ', ''),
            price= price.text.replace(' ', '').replace('₽', ''),
            link= link,
            
            nucleus= Ядро
            frequency= Частота.partition(' ГГц')[0],
            socket= Сокет
            numberofthreads= ЧислоПотоков
            heatdissipation= Тепловыделение.replace(' Вт', '')
            memorytype= ТипПамяти
            maxmemory= МаксимальныйОбъемПамяти.replace(' ГБ', ''),
            numberofcores= КоличествоЯдер
            numberofchannels= КоличествоКаналов
            processtechnology = Техпроцесс.replace(' нм', '')
            graphicscorefrequency= ЧастотаГрафическогоЯдра.partition('МГц')[0], 
            modelgraphickernel= МодельГрафическогоЯдра
            frequencymemory= ЧастотаПамяти
            image= image

            cursor.execute('INSERT INTO processors (store, type, name, price, link, nucleus,frequency,socket,numberofthreads,heatdissipation,memorytype,maxmemory,numberofcores,numberofchannels,processtechnology ,graphicscorefrequency,modelgraphickernel,frequencymemory,image) values (%s, %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) RETURNING *;',(store, types, name, price, link, nucleus,frequency,socket,numberofthreads,heatdissipation,memorytype,maxmemory,numberofcores,numberofchannels,processtechnology ,graphicscorefrequency,modelgraphickernel,frequencymemory,image))
            connection.commit()









    




    
    # driver.get("https://www.citilink.ru/catalog/moduli-pamyati/?view_type=list")
    # elems = driver.find_elements(By.CLASS_NAME, "product_data__gtm-js ")
    # for elem in elems:
    #     name = elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__title ")
    #     price='none'
    #     if elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__price_current-price "):          
    #             price =  elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__price_current-price ")
    #     link = name.get_attribute('href')
    #     image = elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__picture-hover_part ").get_attribute('data-src')
    #     описание = elem.find_element(By.CLASS_NAME, "ProductCardHorizontal__properties").find_elements(By.CLASS_NAME, "ProductCardHorizontal__properties_value")
        
        
    #     driver1.get(link+'properties/')
    #     elems1= driver1.find_elements(By.CLASS_NAME, 'Specifications__row')


    #     Латентность = 'none'
    #     Частота='0'
    #     Задержки='none'
    #     ФормФактор ='0'

    #     ТипПамяти='0'
    #     КоличествоМодулей='1'
    #     ОбъемМодуля='0'
    #     КоличествоКаналовПамяти='1'

    #     for elem1 in elems1:
    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Латентность':          
    #             Латентность = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text

    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Задержка':          
    #             Задержки = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Скорость':          
    #             Частота = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Форм-фактор':          
    #             ФормФактор = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Тип памяти':          
    #             ТипПамяти = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Количество модулей':          
    #             КоличествоМодулей = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text
                
    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Объем модуля':          
    #             ОбъемМодуля = elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text

    #         if elem1.find_element(By.CLASS_NAME, 'Specifications__column_name').text == 'Режим работы': 
    #             if elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text == 'двухканальный':
    #                 КоличествоКаналовПамяти = 2
    #             if elem1.find_element(By.CLASS_NAME, 'Specifications__column_value').text == 'трёхканальный':
    #                 КоличествоКаналовПамяти = 3
                
            
     
    #     obj={'store':'Ситилинк','type':'Оперативная память','name':name.text.replace('Модуль памяти ', ''), 'price':price.text.replace(' ', ''), 'link':link,
    #     'cpu':{
    #     # Объем!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    #     'par1':описание[0].text.partition('ГБ')[0].replace('х', '*'),
    #     # Частота!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    #     'par2':Частота.replace('МГц', ''),
    #     # Латентность
    #     'par3':Латентность,
    #      # Задержки
    #     'par4':Задержки,
    #     # Форм-фактор
    #     'par5':ФормФактор,
    #     'ТипПамяти':ТипПамяти,
    #     'КоличествоМодулей':КоличествоМодулей,
    #     'ОбъемМодуля':ОбъемМодуля.replace(' ГБ', ''),
    #     'КоличествоКаналовПамяти':КоличествоКаналовПамяти
    #     }, 'image':image
    #     }
    #     listitems.append(obj)

    #     with connection.cursor() as cursor:
    #         store=     'SITILINK',
    #         types= 'Оперативная память',
    #         name= name.text.replace('Оперативная память ', ''),
    #         price= price.text.replace(' ', '').replace('₽', ''),
    #         link= link,
            
    #         capacity=описание[0].text.partition('ГБ')[0].replace('х', '*'),
    #         frequency=Частота.replace('МГц', '')
    #         latency=Латентность
    #         delays=Задержки
    #         formFactor=ФормФактор
    #         memoryType=ТипПамяти
    #         numberOfModules=КоличествоМодулей
    #         volumeModule=ОбъемМодуля.replace(' ГБ', '')
    #         image=image

    #         cursor.execute('INSERT INTO memoryes (store, type, name, price, link, capacity,frequency,latency,delays,formFactor,memoryType,numberOfModules,volumeModule,image) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s ) RETURNING *;',(store, types, name, price, link, capacity,frequency,latency,delays,formFactor,memoryType,numberOfModules,volumeModule,image))
    #         connection.commit()












        
    driver.close()
    driver1.close()
   
    
  
    return listitems

def get_products_dns():
    listitems = []

    connection = psycopg2.connect(
    host=host,
    user=user,
    password=password,
    database=db_name
    )
    print('connectAddTodo')

    

    
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors-spki-list')
    options.add_argument('--ignore-ssl-errors')

    driver = webdriver.Chrome(executable_path="E:\pr1\client\server\chromedriver (6).exe", chrome_options=options)
    driver1 = webdriver.Chrome(executable_path="E:\pr1\client\server\chromedriver (6).exe", chrome_options=options)

    # driver.get("https://www.dns-shop.ru/catalog/17a89aab16404e77/videokarty/?order=6")
    # elems1 = driver.find_elements(By.CLASS_NAME, "catalog-product ")
    # for elem1 in elems1:
    #     name = elem1.find_element(By.TAG_NAME, 'span')
    #     price =  elem1.find_element(By.CLASS_NAME, "product-buy__price")
    #     link = elem1.find_element(By.CLASS_NAME, "catalog-product__name ").get_attribute('href')
    #     driver1.get(link+"characteristics/")
    #     time.sleep(1)
    #     Картинка = driver1.find_element(By.CLASS_NAME, "product-images-slider__main-img ").get_attribute('src')
    #     elems2 = driver1.find_elements(By.CLASS_NAME, "product-characteristics__spec")
        
    #     Видеочипсет = 0
    #     Память=0
    #     Частота=0
    #     Интерфейс=0

    #     ЧастотаПамяти=0
    #     Техпроцесс=0
    #     ТипПамяти=0
    #     РазрядностьШиныПамяти=0
        
    #     for elem2 in elems2:
                
    #         if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Модель':
    #             Видеочипсет = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

    #         if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Штатная частота работы видеочипа':
    #             Частота = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text
                
    #         if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Объем видеопамяти' :
    #             Память = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

    #         if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Интерфейс подключения' :
    #             Интерфейс = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text


    #         if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Эффективная частота памяти' :
    #             ЧастотаПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

    #         if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Техпроцесс' :
    #             Техпроцесс = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

    #         if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Тип памяти' :
    #             ТипПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

    #         if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Разрядность шины памяти' :
    #             РазрядностьШиныПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

    #     obj={'store':'DNS','type':'Видеокарта','name':name.text.replace('Видеокарта ', ''), 'price':price.text.replace(' ', '').replace('₽', ''), 'link':link,
    #     'cpu':{
    #     # Видеочипсет
    #     'par1':Видеочипсет,
    #     # Память    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    #     'par2':Память.replace(' ГБ', ''),
    #      # Частота    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    #     'par8':Частота.replace(' МГц', ''),
    #     # Интерфейс
    #     'par3':Интерфейс,
    #     'ЧастотаПамяти':ЧастотаПамяти.replace(' МГц', ''),
    #     'Техпроцесс':Техпроцесс.replace(' нм', ''),
    #     'ТипПамяти':ТипПамяти,
    #     'РазрядностьШиныПамяти':РазрядностьШиныПамяти.replace(' бит', ''),
    #     }, 'image':Картинка
    #     }
        
    
    #     with connection.cursor() as cursor:
    #         store=     'DNS',
    #         types= 'Видеокарта',
    #         name= name.text.replace('Видеокарта ', ''),
    #         price= price.text.replace(' ', '').replace('₽', ''),
    #         link= link,
    #         videochipset= Видеочипсет,
    #         memory= Память.replace(' ГБ', ''),
    #         frequency= Частота.replace(' МГц', ''),
    #         interface= Интерфейс,
    #         frequencyMemory= ЧастотаПамяти.replace(' МГц', ''),
    #         processTechnology= Техпроцесс.replace(' нм', ''),
    #         MemoryBusWidth= РазрядностьШиныПамяти.replace(' бит', ''),
    #         typeofmemory= ТипПамяти,
    #         image= Картинка

    #         cursor.execute('INSERT INTO videokards (store, type, name, price, link, videochipset, memory, frequency, interface, frequencyMemory, processTechnology, MemoryBusWidth, typeofmemory, image) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s) RETURNING *;',(store,types,name,price,link,videochipset,memory,frequency,interface,frequencyMemory,processTechnology,MemoryBusWidth,typeofmemory,image))
    #         connection.commit()









#     driver.get("https://www.dns-shop.ru/catalog/17a899cd16404e77/processory/?order=6")
#     elems1 = driver.find_elements(By.CLASS_NAME, "catalog-product ")
#     for elem1 in elems1:
#         name = elem1.find_element(By.TAG_NAME, 'span')
#         price =  elem1.find_element(By.CLASS_NAME, "product-buy__price")
#         link = elem1.find_element(By.CLASS_NAME, "catalog-product__name ").get_attribute('href')
#         driver1.get(link+"characteristics/")
#         time.sleep(1)
#         Картинка = driver1.find_element(By.CLASS_NAME, "product-images-slider__main-img ").get_attribute('src')
#         elems2 = driver1.find_elements(By.CLASS_NAME, "product-characteristics__spec")
        
#         Ядро = 0
#         Частота=0
#         Сокет=0
#         ЧислоПотоков=0
#         Тепловыделение =0
#         МаксимальныйОбъемПамяти=0
#         ТипПамяти=0
        
#         КоличествоЯдер=0
#         КоличествоКаналов=0
#         Техпроцесс=0
#         ЧастотаГрафическогоЯдра='0 МГц'
#         МодельГрафическогоЯдра='Отсутствует'
#         ЧастотаПамяти=0

#         for elem2 in elems2:
            
                
#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Ядро':
#                 Ядро = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Базовая частота процессора':
#                 Частота = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text
                
#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Сокет' :
#                 Сокет = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Тепловыделение (TDP)' :
#                 Тепловыделение = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Максимальное число потоков' :
#                 ЧислоПотоков = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

# # 

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Максимально поддерживаемый объем памяти' :
#                 МаксимальныйОбъемПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Тип памяти' :
#                 ТипПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Общее количество ядер' :
#                 КоличествоЯдер = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Количество каналов' :
#                 КоличествоКаналов = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Техпроцесс' :
#                 Техпроцесс = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Максимальная частота графического ядра' :
#                 ЧастотаГрафическогоЯдра = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Модель графического процессора' :
#                 МодельГрафическогоЯдра = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#             if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Максимальная частота оперативной памяти' :
#                 ЧастотаПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

#         obj={'store':'DNS','type':'Процессор','name':name.text.replace('Процессор ', ''), 'price':price.text.replace(' ', '').replace('₽', ''), 'link':link,
#         'cpu':{
#         # Ядро
#         'par1': Ядро,
#         # Частота!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    
#         'par2':Частота.replace(' ГГц', ''),
#         # Сокет
#         'par3':Сокет,
#         # Число потоков!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
#         'par4':ЧислоПотоков,
#         # Тепловыделение
#         'par5':Тепловыделение.replace(' Вт', ''),
#         'ТипПамяти':ТипПамяти,
#         'МаксимальныйОбъемПамяти':МаксимальныйОбъемПамяти,
#         'КоличествоЯдер':КоличествоЯдер,
#         'КоличествоКаналов':КоличествоКаналов,
#         'Техпроцесс':Техпроцесс.replace(' нм', ''),
#         'ЧастотаГрафическогоЯдра':ЧастотаГрафическогоЯдра.replace(' МГц',''),
#         'МодельГрафическогоЯдра':МодельГрафическогоЯдра,
#         'ЧастотаПамяти':ЧастотаПамяти,
#         }, 'image':Картинка
#         }
#         listitems.append(obj)

#         with connection.cursor() as cursor:
#             store=     'DNS',
#             types= 'Процессор',
#             name= name.text.replace('Процессор ', ''),
#             price= price.text.replace(' ', '').replace('₽', ''),
#             link= link,
            
#             nucleus= Ядро
#             frequency= Частота.replace(' ГГц', '')
#             socket= Сокет
#             numberofthreads= ЧислоПотоков
#             heatdissipation= Тепловыделение.replace(' Вт', '')
#             memorytype= ТипПамяти
#             maxmemory= МаксимальныйОбъемПамяти
#             numberofcores= КоличествоЯдер
#             numberofchannels= КоличествоКаналов
#             processtechnology = Техпроцесс.replace(' нм', '')
#             graphicscorefrequency= ЧастотаГрафическогоЯдра.replace(' МГц','')
#             modelgraphickernel= МодельГрафическогоЯдра
#             frequencymemory= ЧастотаПамяти
#             image= Картинка

#             cursor.execute('INSERT INTO processors (store, type, name, price, link, nucleus,frequency,socket,numberofthreads,heatdissipation,memorytype,maxmemory,numberofcores,numberofchannels,processtechnology ,graphicscorefrequency,modelgraphickernel,frequencymemory,image) values (%s, %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) RETURNING *;',(store, types, name, price, link, nucleus,frequency,socket,numberofthreads,heatdissipation,memorytype,maxmemory,numberofcores,numberofchannels,processtechnology ,graphicscorefrequency,modelgraphickernel,frequencymemory,image))
#             connection.commit()
    

       









    
    driver.get("https://www.dns-shop.ru/catalog/17a89a3916404e77/operativnaya-pamyat-dimm/?order=6")
    elems1 = driver.find_elements(By.CLASS_NAME, "catalog-product ")
    for elem1 in elems1:
        name = elem1.find_element(By.TAG_NAME, 'span')
        price =  elem1.find_element(By.CLASS_NAME, "product-buy__price")
        link = elem1.find_element(By.CLASS_NAME, "catalog-product__name ").get_attribute('href')
        driver1.get(link+"characteristics/")
        time.sleep(1)
        Картинка = driver1.find_element(By.CLASS_NAME, "product-images-slider__main-img ").get_attribute('src')
        elems2 = driver1.find_elements(By.CLASS_NAME, "product-characteristics__spec")
        
        Латентность = '0'
        Частота=0
        Объем=0
        Задержки='none'
        ФормФактор =0

        ТипПамяти=0
        КоличествоМодулей=0
        ОбъемМодуля=0

        for elem2 in elems2:    
            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Суммарный объем памяти всего комплекта':
                Объем = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Тактовая частота':
                Частота = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text
               
                
            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='CAS Latency (CL)' :
                Латентность = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text
                Задержки = Латентность
                print(Задержки)

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='RAS to CAS Delay (tRCD)' :
                Задержки = Задержки+'-'+ elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Row Precharge Delay (tRP)' :
                Задержки = Задержки+'-'+elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Activate to Precharge Delay (tRAS)' :
                Задержки = Задержки+'-'+elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Форм-фактор памяти' :
                ФормФактор = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text
            
# 
            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Тип памяти' :
                ТипПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Количество модулей в комплекте' :
                КоличествоМодулей = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Объем одного модуля памяти' :
                ОбъемМодуля = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

        obj={'store':'DNS','type':'Оперативная память','name':name.text.replace('Оперативная память ', ''), 'price':price.text.replace(' ', '').replace('₽', ''), 'link':link,
        'cpu':{
        # Объем!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        'par1':Объем.replace(' ГБ', ''),
        # Частота!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        'par2':Частота.replace(' МГц', ''),
        # Латентность
        'par3':Латентность,
         # Задержки
        'par4':Задержки,
        # Форм-фактор
        'par5':ФормФактор,

        'ТипПамяти':ТипПамяти,
        'КоличествоМодулей':КоличествоМодулей,
        'ОбъемМодуля':ОбъемМодуля.replace(' ГБ', ''),
        }, 'image':Картинка
        }
        listitems.append(obj)
        with connection.cursor() as cursor:
            store=     'DNS',
            types= 'Оперативная память',
            name= name.text.replace('Оперативная память ', ''),
            price= price.text.replace(' ', '').replace('₽', ''),
            link= link,
            
            capacity=Объем.replace(' ГБ', '')
            frequency=Частота.replace(' МГц', '')
            latency=Латентность
            delays=Задержки
            formFactor=ФормФактор
            memoryType=ТипПамяти
            numberOfModules=КоличествоМодулей
            volumeModule=ОбъемМодуля.replace(' ГБ', '')
            image=Картинка

            cursor.execute('INSERT INTO memoryes (store, type, name, price, link, capacity,frequency,latency,delays,formFactor,memoryType,numberOfModules,volumeModule,image) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s ) RETURNING *;',(store, types, name, price, link, capacity,frequency,latency,delays,formFactor,memoryType,numberOfModules,volumeModule,image))
            connection.commit()












    driver.get("https://www.dns-shop.ru/catalog/17a89a0416404e77/materinskie-platy/?order=6")
    elems1 = driver.find_elements(By.CLASS_NAME, "catalog-product ")
    for elem1 in elems1:
        name = elem1.find_element(By.TAG_NAME, 'span')
        price =  elem1.find_element(By.CLASS_NAME, "product-buy__price")
        link = elem1.find_element(By.CLASS_NAME, "catalog-product__name ").get_attribute('href')
        driver1.get(link+"characteristics/")
        time.sleep(1)
        Картинка = driver1.find_element(By.CLASS_NAME, "product-images-slider__main-img ").get_attribute('src')
        elems2 = driver1.find_elements(By.CLASS_NAME, "product-characteristics__spec")
        
        Сокет=0
        Чипсет=0
        ТипПамяти=0
        МаксимальнаяЧастотаПамяти=0
        МаксимальныйОбъемПамяти=0
        КоличествоКаналовПамяти=0
        КоличествоСлотовPCIE1=0
        ФормФактор=0
        ТипПамяти=0
        КоличествоСлотовПамяти=0




        for elem2 in elems2:
            
                
            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Сокет':
                Сокет = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text.find('Чипсет AMD') !=-1 or elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text.find('Чипсет Intel') !=-1:
                Чипсет = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text
                
            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Форм фактор поддерживаемой памяти' :
                ТипПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Максимальная частота памяти (JEDEC/без разгона)' :
                МаксимальнаяЧастотаПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text
            
            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Максимальный объем памяти' :
                МаксимальныйОбъемПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Количество каналов памяти' :
                КоличествоКаналовПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Количество слотов PCI-E x1' :
                if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text!='нет':
                    КоличествоСлотовPCIE1 = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Форм-фактор' :
                ФормФактор = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Тип поддерживаемой памяти' :
                ТипПоддерживаемойПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

            if elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-title").text =='Количество слотов памяти' :
                КоличествоСлотовПамяти = elem2.find_element(By.CLASS_NAME, "product-characteristics__spec-value").text

           





        obj={'store':'DNS','type':'Материнская плата','name':name.text.replace('Материнская плата ', ''), 'price':price.text.replace(' ', '').replace('₽', ''), 'link':link,
        'cpu':{
        'Сокет':Сокет,
        'Чипсет':Чипсет,
        'ТипПамяти':ТипПамяти,
        'МаксимальнаяЧастотаПамяти':МаксимальнаяЧастотаПамяти.replace(' МГц', ''),
        'МаксимальныйОбъемПамяти':МаксимальныйОбъемПамяти.replace(' ГБ', ''),
        'КоличествоКаналовПамяти':КоличествоКаналовПамяти,
        'КоличествоСлотовPCIE1':КоличествоСлотовPCIE1,
        'ФормФактор':ФормФактор,
        'ТипПоддерживаемойПамяти':ТипПоддерживаемойПамяти,
        'КоличествоСлотовПамяти':КоличествоСлотовПамяти,

        }, 'image':Картинка
        }
        listitems.append(obj)
        with connection.cursor() as cursor:
            store=     'DNS',
            types= 'Материнская плата',
            name= name.text.replace('Материнская плата ', ''),
            price= price.text.replace(' ', '').replace('₽', ''),
            link= link,
            
            socket = Сокет
            chipset = Чипсет
            memorytype = ТипПамяти
            maxmemoryfrequency = МаксимальнаяЧастотаПамяти.replace(' МГц', '')
            maxmemory = МаксимальныйОбъемПамяти.replace(' ГБ', '')
            numberofmemorychannels = КоличествоКаналовПамяти
            numberofslotspcie1 = КоличествоСлотовPCIE1
            formfactor = ФормФактор
            supportedmemorytype = ТипПоддерживаемойПамяти
            numberofmemoryslots = КоличествоСлотовПамяти
            image=Картинка

            cursor.execute('INSERT INTO motherboards (store, type, name, price, link, socket,chipset,memorytype,maxmemoryfrequency,maxmemory,numberofmemorychannels,numberofslotspcie1,formfactor,supportedmemorytype,numberofmemoryslots,image) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s ) RETURNING *;',(store, types, name, price, link, socket,chipset,memorytype,maxmemoryfrequency,maxmemory,numberofmemorychannels,numberofslotspcie1,formfactor,supportedmemorytype,numberofmemoryslots,image))
            connection.commit()





    driver.close()
    driver1.close()
    return listitems


    





    

if __name__ == '__main__':
   
  
    # print(get_products_siti())
   
    print(get_products_dns())
   
   
    
    





# url = f'https://www.citilink.ru/search/?text={search}&menu_id=29'
    # rs = requests.get(url)
    # root = BeautifulSoup(rs.text, 'html.parser')
    # print(root)
    # items = []
    # for a in root.find_all('div', class_='ProductCardVerticalLayout ProductCardVertical__layout'):
    #     n = a.find('div', class_='ProductCardVertical__description')
    #     p = a.find('span', class_='ProductCardVerticalPrice__price-current_current-price js--ProductCardVerticalPrice__price-current_current-price')
    #     obj = []
    #     obj.append(n.get_text())
    #     obj.append(p.get_text())
    #     items.append(obj)