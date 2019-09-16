import csv
import re 



#patterns = ['ANNUNCIATION', 'VISITATION', 'NATIVITY', 'THE PRESENTATION', 'CHRIST AMONG THE DOCTORS', 'AGONY IN THE GARDEN', 'SCOURGING OF CHRIST', 'CROWN OF THORNS', 'CROWNED WITH THORNS', 'CARRYING THE CROSS', 'CRUCIFIXION', 'RESURRECTION', 'ASCENSION', 'DESCENT OF THE HOLY', 'ASSUMPTION', 'CORONATION OF THE VIRGIN']
patterns = ['ANNUNCIATION', 'VISITATION', 'NATIVITY', 'THE PRESENTATION', 'CHRIST AMONG THE DOCTORS', 'AGONY IN THE GARDEN', 'SCOURGING OF CHRIST', 'CROWNED WITH THORNS', 'CARRYING THE CROSS', 'CRUCIFIXION', 'RESURRECTION', 'ASCENSION', 'DESCENT OF THE HOLY', 'ASSUMPTION', 'CORONATION OF THE VIRGIN']

print('objectnumber,title,mysterynum,mystery,department,classification,artistdisplayname,artistnationality,culture,objectenddate,rosarydistanceyrs,tags,linkresource')

def classify(x):
    y= re.split('; |, |\||-',x)
    z = y[0].partition(' ')[0]
    #print(f'x= {x}  z= {z}')
    return z
    # 9 is default if x not found
    
#z; }.get(x, 'Unknown')    # 9 is default if x not found

with open('MetObjects.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0

    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1

        title = row["Title"]
        #objectNumber = row["Object Number"]
        objectNumber = row["Object ID"]
        tags =  row["Tags"]
        department =  row["Department"]
        classification =  row["Classification"]
        classificationNew = classify(classification) 
        artistdisplayname =  row["Artist Display Name"]
        artistnationality =  row["Artist Nationality"]
        linkresource =  row["Link Resource"]
        culture = row["Culture"]
        objenddate = row["Object End Date"]
        rosarydistanceyrs = int(row["Object End Date"]) - 1213
        searchtxt = title + tags

        for num, pattern in enumerate(patterns, start=1):
            if re.search(pattern, searchtxt.upper()):
               #print(f' {pattern} found a match!')
               #print(f'{objectNumber},\"\"{title}\"\",{num},{pattern},\"{department}\",\"{classificationNew}\",\"{artistdisplayname}\",\"{artistnationality}\",\"{culture}\",\"{objenddate}\",\"{tags}\",\"{linkresource}\"')
               print(f'{objectNumber};\"{title}\";{num};{pattern};\"{department}\";\"{classificationNew}\";\"{artistdisplayname}\";\"{artistnationality}\";\"{culture}\";\"{objenddate}\";\"{rosarydistanceyrs}\";\"{tags}\";\"{linkresource}\"')
        line_count += 1

#    "print(f'Processed {line_count} lines.')


#with open('employee_file2.csv', mode='w') as csv_file:
#   fieldnames = ['emp_name', 'dept', 'birth_month']
#    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
#
#    writer.writeheader()
#    writer.writerow({'emp_name': 'John Smith', 'dept': 'Accounting', 'birth_month': 'November'})
#    writer.writerow({'emp_name': 'Erica Meyers', 'dept': 'IT', 'birth_month': 'March'})





