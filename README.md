# Simple Score Storage

SSS is a basic REST API to save scores.

## GET

### To get a list of the top scorers :

#### Route parameter :

length : (number, default: 5) length of the list

```bash
/[api_key]/list/[length]
```

## POST

### To add a new scorer :

#### Body parameters

name : (string, [a-zA-Z], length: 3) name of the scorer

score : (number) score

```bash
/[api_key]/new
```

## Usage

Please feel free to contact me if you want an API key. (Personal usage only)