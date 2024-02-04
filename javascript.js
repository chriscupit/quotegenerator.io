var quotes = ['Thank you for always doing what is best for our family.',
'You are beautiful, wonderful, amazing and I love you.',
'You are the best wife and mother anyone could ask for.',
'Wow, God has blessed us with you. How lucky we are.',
'You are the love of my life and I thank God everyday for you.',
'You always put everyone else first and we appreciate you more than you can ever know.',
'Thank you for showing me the path to God.  I will forever be grateful to you.',
'May God bless you all the days of your life.',
'You are an inspiration to me in so many ways. From your spirituality and compassion to your leadership and work ethic. You are amazing and I love you.',
'You are such an amazing person.  Your outlook on life is uplifting and inspiring. Thank you for being you.',
'The world is not always friendly, but that all goes away when I see you beautiful smile everyday.',
'You have the best personality and I am so fortunate to be a part of your life.  You are beautiful and I love you.',
'Wow, how lucky are our kids to have such an amazing, caring, selfless, positive and intelligent mother.',
'You are an amazing wife, friend and lover. You are a true gift from God and I am so lucky to have you in my life.',
'I love spending time with you. I cherish every moment we have together and thank you for always keeping God in our marriage.',
'Being around you makes everything better. The world is a better place because you are in it.',
'You light up the room with your beautiful smile and stunning eyes. You are amazing and I love you.',
'You have a wonderful sense of humor and I love laughing with you. (It is the key to longevity) I love you.',
'You always bring out the best in people and our family. Our kids are so happy and wonderful because of you.'

]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}