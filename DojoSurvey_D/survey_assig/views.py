from django.shortcuts import render,redirect

def index(request):
    return render(request, 'index.html')

def result(request):
    if request.method == 'POST' :
        form_data = request.POST
        return render(request, 'result.html', {'data': form_data})
    return redirect('/')
