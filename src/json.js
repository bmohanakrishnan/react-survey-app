export const json = {
    "title": "Survey Questions",
    "logo": "./Dvya_logo.png",
    "logoWidth": "170px",
    "logoHeight": "80px",
    "logoFit": "cover",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "panel",
        "name": "nps-panel",
        "elements": [
        {
            "type": "radiogroup",
            "name": "outfit-choose",
            "title": "How do you choose your outfits?",
            "choices": [
                "By Comfort",
                "By it's Style",
                "Both by Style and Comfort"
            ],
            "isRequired": true
        },
        {
            "type": "radiogroup",
            "name": "dressing-type",
            "title": "Do you dress to be unique or to fit in-ready outfits?" ,
            "choices": [
                "Unique - I like to wear customized outfits",
                "Unique - I like both customized and fit outfits",
                "Blend in - I really like to fit outfits"
            ],
            "isRequired": true,
        },
         {
          "type": "rating",
          "name": "rating",
          "title": {
           "default": "On a scale from 0 to 10 how likely you are to wear a kurti?",
           },
          "rateMin": 0,
          "rateMax": 10,
          "minRateDescription": {
           "default": "Very unlikely",
          },
          "maxRateDescription": {
           "default": "Very likely",
           },
           "isRequired": true,
         },
         {
            "type": "radiogroup",
            "name": "preference",
            "title": "Do you prefer wearing?",
            "choices": [
              "Tight Fit",
              "Loose Fit",
              "Medium Fit",              
            ],
            "isRequired": true,           
          },
          {
            "type": "comment",
            "name": "preference-reason",
            "titleLocation": "hidden",
            "hideNumber": true,
            "placeholder": "What's the main reason for your preference?",
            "maxLength":  500,
          },
         {
          "type": "checkbox",
          "name": "fabric-selection",
          "title": {
           "default": "Your favorite Fabric?",
          },
          "description": {
           "default": "Please select no more than three features.",
          },
          "isRequired": true,
          "choices": [
           {
            "value": "Cotton",
            "text": "Cotton"
           },
           {
            "value": "Rayon",
            "text": "Rayon"
           },
           {
            "value": "Linen",
            "text": "Linen"
           },
           {
            "value": "Silk",
            "text": "Silk"
           },
           {
            "value": "Georgette",
            "text": "Georgette"
           },
          ],
          "showOtherItem": true,
          "otherPlaceholder": {
           "default": "Please specify...",
          },
          "otherText": {
           "default": "Others",
          },
          "colCount": 2,
          "maxSelectedChoices": 6
         }
        ],
        "isRequired": true
       },
        ]
    },
    {
    "name": "page2",
    "elements": [
       {
        "type": "comment",
        "name": "missing-feature",
        "title": "If given a wish what will you change (customize) in your Kurti?",
        "maxLength":  500,
      },
      {
        "type": "comment",
        "name": "why-tshirts",
        "title": "Why alone T-Shirts for Gym, Why not wear kurtis for Gym?, If so what would you expect and have you encountered any discomfort. What customization you would like to have(like Arm loose, hip loose, sleeve comfort)",
        "maxLength":  500,
      },
      {
        "type": "text",
        "name": "size",
        "title": "What's your outfit size",
      },
     ]
     }
    ],
    "showPrevButton": true,
    "showQuestionNumbers": "on",
    "completeText": {
    },
    "questionsOnPageMode": "10",
    "widthMode": "static",
    "width": "1000px"
   };